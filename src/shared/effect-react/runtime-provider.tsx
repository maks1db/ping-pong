/* eslint-disable @typescript-eslint/no-explicit-any */
import { createContext, FC, ReactNode, useMemo } from "react";
import { Layer, ManagedRuntime } from "effect";

export const RuntimeContext =
  createContext<null | ManagedRuntime.ManagedRuntime<unknown, never>>(null);

export const RuntimeProvider: FC<RuntimeProviderProps> = ({
  Live,
  children,
}) => {
  const runtime = useMemo(() => {
    return ManagedRuntime.make(Live);
  }, []);
  return (
    <RuntimeContext.Provider value={runtime}>
      {children}
    </RuntimeContext.Provider>
  );
};

export interface RuntimeProviderProps<Type = never> {
  Live: Layer.Layer<any, never, Type>;
  children: React.ReactNode | ReactNode[];
}

export interface TestRuntimeProviderProps {
  Live: Layer.Layer<any, never, never>;
  children: React.ReactNode | ReactNode[];
}
