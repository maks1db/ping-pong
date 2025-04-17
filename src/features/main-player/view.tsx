import { FC } from "react";

export const MainPlayer: FC = () => {
  return (
    <div className="lg:w-1/4 bg-gray-800 rounded-lg p-4 shadow-lg text-white">
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2">
        <i className="fas fa-cogs"></i> Настройки подключения
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

      <div id="offerSection" className="mb-4">
        <label className="block text-sm font-medium mb-1">
          Код подключения
        </label>
        <div className="flex">
          <input
            type="text"
            id="offerCode"
            className="flex-grow bg-gray-700 border border-gray-600 rounded-l px-3 py-2"
            readOnly
          ></input>
          <button
            id="copyOffer"
            className="bg-yellow-500 hover:bg-yellow-600 text-gray-900 px-3 py-2 rounded-r"
          >
            <i className="fas fa-copy"></i>
          </button>
        </div>
        <p className="text-xs text-gray-400 mt-1">
          Отправьте этот код другому игроку
        </p>
      </div>

      <div id="answerSection" className="mb-4 hidden">
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
        className="w-full bg-green-600 hover:bg-green-700 py-2 px-4 rounded font-medium"
      >
        <i className="fas fa-plug"></i> Подключиться
      </button>

      <button
        id="disconnectBtn"
        className="w-full bg-red-600 hover:bg-red-700 py-2 px-4 rounded font-medium mt-2 hidden"
      >
        <i className="fas fa-times"></i> Отключиться
      </button>

      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 border-b border-gray-700 pb-2">
          <i className="fas fa-info-circle"></i> Статус игры
        </h3>
        <div id="gameStatus" className="text-sm">
          Ожидание подключения игроков...
        </div>
      </div>
    </div>
  );
};
