import { Console, Effect } from "effect";
import { Connector } from "../../../shared/service/connector";

export const mainApp = Effect.gen(function* () {
  const connector = yield* Connector;

  yield* connector.makeConnection();
  yield* connector.createOffer();
}).pipe(Effect.tapError(Effect.log), Effect.tap(Console.log));
