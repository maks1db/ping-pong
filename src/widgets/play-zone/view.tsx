import { FC } from "react";
import { MainPlayer } from "../../features/main-player";
import { Screen } from "../../features/screen";

export const PlayZone: FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-6 flex flex-col lg:flex-row gap-6">
      <MainPlayer />
      <Screen />
    </main>
  );
};
