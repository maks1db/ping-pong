import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Screen: FC<{ className?: string }> = ({ className }) => {
  return (
    <div className={twMerge("relative h-96 md:h-[32rem]", className)}>
      <div className="center-line"></div>
      <canvas id="gameCanvas" className="w-full h-full"></canvas>

      <div
        id="startScreen"
        className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-70"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-6 glow text-white">
          ПИНГ ПОНГ
        </h2>
        <button
          id="startButton"
          className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold text-lg pulse"
        >
          СТАРТ
        </button>
        <div className="mt-8 text-sm text-gray-400">
          <p>Набравший 5 очков побеждает!</p>
        </div>
      </div>

      <div
        id="gameOverScreen"
        className="absolute inset-0 hidden flex-col items-center justify-center bg-black bg-opacity-70"
      >
        <h2
          id="winnerText"
          className="text-3xl md:text-4xl font-bold mb-6 glow"
        ></h2>
        <div className="flex space-x-4">
          <button
            id="restartButton"
            className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white font-bold"
          >
            Играть заново
          </button>
          <button
            id="menuButton"
            className="px-6 py-2 bg-gray-600 hover:bg-gray-700 rounded-lg text-white font-bold"
          >
            MENU
          </button>
        </div>
      </div>
    </div>
  );
};
