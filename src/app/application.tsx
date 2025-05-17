import { FC } from "react";
import "./style.css";
import { PlayZone } from "../widgets/play-zone";
import { RuntimeProvider } from "../shared/effect-react";
import { MainLive } from "./live";

export const App: FC = () => {
  return (
    <RuntimeProvider Live={MainLive}>
      <PlayZone />
    </RuntimeProvider>
  );
};
