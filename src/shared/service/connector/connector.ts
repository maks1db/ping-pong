import { Data, Effect, Either, Option, Ref } from "effect";

export class ConnectorError extends Data.TaggedError("ConnectorError")<{
  message: string;
}> {}
export class Connector extends Effect.Service<Connector>()("Connector", {
  effect: Effect.gen(function* () {
    // STREAM
    const connectionRef = yield* Ref.make<RTCPeerConnection | null>(null);
    return {
      makeConnection: () =>
        Effect.gen(function* () {
          const configuration = {
            iceServers: [
              { urls: "stun:stun.l.google.com:19302" },
              { urls: "stun:stun1.l.google.com:19302" },
              { urls: "stun:stun2.l.google.com:19302" },
            ],
          };

          const peerConnection = new RTCPeerConnection(configuration);

          peerConnection.addEventListener("icecandidate", (ev) => {
            console.log("icecandidate", ev);
          });
          peerConnection.addEventListener("connectionstatechange", (ev) => {
            console.log("state", ev);
          });

          peerConnection.addEventListener("datachannel", (ev) => {
            console.log("datachannel", ev);
          });

          yield* Ref.set(connectionRef, peerConnection);

          yield* Effect.addFinalizer(() =>
            Effect.gen(function* () {
              yield* Effect.sync(() => {
                peerConnection.close();
              });

              yield* Ref.set(connectionRef, null);
            }),
          );
        }),

      createOffer: () =>
        Effect.gen(function* () {
          const connection = yield* Ref.get(connectionRef).pipe(
            Effect.flatMap(
              Either.fromNullable(
                () =>
                  new ConnectorError({
                    message: "WebRtc-соединение не инициализировано",
                  }),
              ),
            ),
          );

          const offer = yield* Effect.tryPromise({
            try: () => connection.createOffer(),
            catch: (e) =>
              new ConnectorError({
                message: `Не удалось создать offer WebRtc. ${e}`,
              }),
          }).pipe(
            Effect.tap((offer) =>
              Effect.promise(() => connection.setLocalDescription(offer)),
            ),
          );

          const offerData = {
            type: "offer",
            sdp: offer.sdp,
            playerName: "Player",
          };

          console.log(offerData);
        }),
    };
  }),
}) {}
