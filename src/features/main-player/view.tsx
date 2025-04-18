import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const MainPlayer: FC<PlayerProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-lg p-4 shadow-lg text-white",
        className,
      )}
    >
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 flex items-center gap-4">
        <i className="fas fa-cogs"></i> <span>Настройки</span>
      </h2>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1 text">Ваше имя</label>
        <input
          type="text"
          id="playerName"
          className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
          value="Игрок"
        ></input>
      </div>

      <div className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Тип подключения
        </label>
        <select
          id="connectionType"
          className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
        >
          <option value="offerer">Создать игру</option>
          <option value="answerer">Присоединиться</option>
        </select>
      </div>

      <div id="offerSection" className="mb-4 flex flex-col">
        <label className="block text-sm font-medium mb-1">
          Код подключения
        </label>
        <input
          type="text"
          id="offerCode"
          className=" bg-gray-700 border border-gray-600 rounded px-3 py-2"
          readOnly
        ></input>

        <button
          id="copyOffer"
          className="bg-yellow-500 gap-4 flex items-center w-full hover:bg-yellow-600 text-gray-900 px-3 py-2 rounded mt-2 justify-center"
        >
          <i className="fas fa-copy "></i>
          <span>Копировать</span>
        </button>

        <p className="text-xs text-gray-400 mt-1">
          Отправьте этот код другому игроку
        </p>
      </div>

      <div id="answerSection" className="mb-4 ">
        <label className="block text-sm font-medium mb-1">
          Введите код подключения
        </label>
        <input
          type="text"
          id="answerCode"
          className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
          placeholder="Вставьте код здесь"
        ></input>
      </div>

      <button
        id="connectBtn"
        className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded font-medium flex justify-center items-center gap-4"
      >
        <i className="fas fa-plug"></i> <span>Подключиться</span>
      </button>

      <button
        id="disconnectBtn"
        className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded font-medium mt-2 hidden"
      >
        <i className="fas fa-times"></i> <span>Отключиться</span>
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2 flex items-center gap-4">
          <i className="fas fa-info-circle"></i> <span>Статус игры</span>
        </h3>
        <div id="gameStatus" className="text-sm">
          Ожидание подключения игроков...
        </div>
      </div>
    </div>
  );
};

interface PlayerProps {
  className?: string;
}
