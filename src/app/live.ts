import { Layer } from "effect";
import { Connector } from "../shared/service/connector";
import { SettingsStore } from "../shared/store/settings";

export const MainLive = Layer.mergeAll(
  Connector.Default,
  SettingsStore.Default,
);
