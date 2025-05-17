import { Effect, SubscriptionRef } from "effect";

export class SettingsStore extends Effect.Service<SettingsStore>()(
  "SettingsStore",
  {
    effect: Effect.gen(function* () {
      const ref = yield* SubscriptionRef.make<SettingsStoreType>({
        playerName: "",
        connectionType: "offerer",
        offerCode: "",
      });
      return {
        setPlayerName: (name: string) =>
          SubscriptionRef.update(ref, (s) => ({ ...s, playerName: name })),
        setOfferCode: (code: string) =>
          ref.pipe(SubscriptionRef.update((s) => ({ ...s, offerCode: code }))),
        changeConnectionType: (type: SettingsStoreType["connectionType"]) =>
          ref.pipe(
            SubscriptionRef.update((s) => ({ ...s, connectionType: type })),
          ),
        ref,
      };
    }),
  },
) {}

export const settingsRef = SettingsStore.pipe(Effect.map((x) => x.ref));

export interface SettingsStoreType {
  playerName: string;
  connectionType: "offerer" | "answerer";
  offerCode: string;
}
