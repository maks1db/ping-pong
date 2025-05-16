import { FC } from "react";
import { Settings } from "../../features/settings";
import { Screen } from "../../features/screen";
import { Chat } from "../../features/chat";

export const PlayZone: FC = () => {
  return (
    <main className="flex-grow container mx-auto px-4 py-6 grid grid-flow-col gap-6 grid-cols-12">
      <Settings className="col-span-3" />
      <Screen className="col-span-6" />
      <Chat className="col-span-3" />
    </main>
  );
};
