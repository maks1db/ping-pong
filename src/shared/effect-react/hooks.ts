/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable no-redeclare */
import { useState, useEffect, useContext, useMemo, useCallback } from "react";
import {
  Console,
  Effect,
  Fiber,
  identity,
  Stream,
  SubscriptionRef,
} from "effect";

import { RuntimeContext } from "./runtime-provider";

export function useSubscriptionRef<Store>(
  ref: Effect.Effect<SubscriptionRef.SubscriptionRef<Store>, never, any>,
): Store;
export function useSubscriptionRef<Store, SelectorFnType>(
  ref: Effect.Effect<SubscriptionRef.SubscriptionRef<Store>, never, any>,
  selectorFn: (store: Store) => SelectorFnType,
): SelectorFnType;
export function useSubscriptionRef<Store, SelectorFnType>(
  ref: Effect.Effect<SubscriptionRef.SubscriptionRef<Store>, never, any>,
  selectorFn?: (store: Store) => SelectorFnType,
) {
  // Хук не будет работать, если не инициализировали верхнеуровнево runtime
  const runtime = useContext(RuntimeContext)!;

  const fn = selectorFn || identity;

  const defaultValue = useMemo(() => {
    const program = ref.pipe(Effect.flatMap(SubscriptionRef.get));
    const value = runtime.runSync(program);
    return fn(value);
  }, []);

  const [value, setValue] = useState(defaultValue);

  useEffect(() => {
    const program = Effect.gen(function* () {
      const r = yield* ref;
      yield* r.changes.pipe(
        Stream.map(fn),
        Stream.changes,
        Stream.tap((x) => Effect.sync(() => setValue(x))),
        Stream.runDrain,
      );
    });

    const fiber = runtime.runFork(program);

    return () => {
      Effect.runFork(Fiber.interrupt(fiber));
    };
  }, []);
  return value;
}

export const useEffectRunner = () => {
  const runtime = useContext(RuntimeContext)!;

  const runner = useCallback(
    (program: Effect.Effect<unknown, unknown, any>) => {
      runtime.runFork(program);
    },
    [],
  );

  return runner;
};

export const useEffectProgram = (
  program: Effect.Effect<unknown, unknown, any>,
) => {
  const runtime = useContext(RuntimeContext)!;

  useEffect(() => {
    const fiber = runtime.runFork(program.pipe(Effect.tapError(Console.error)));

    return () => {
      Effect.runFork(Fiber.interrupt(fiber));
    };
  }, []);
};
