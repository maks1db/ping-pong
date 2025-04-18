import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const Chat: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-lg p-4 shadow-lg text-white flex flex-col",
        className,
      )}
    >
      <h2 className="text-xl font-semibold mb-4 border-b border-gray-700 pb-2 flex items-center gap-4">
        <i className="fas fa-comments"></i> <span>Чат</span>
      </h2>

      <div className="h-40 overflow-y-auto bg-slate-500 rounded px-2.5 text-white bg-opacity-30"></div>
      <input
        type="text"
        id="chatInput"
        className=" bg-gray-700 border border-gray-600 rounded px-3 py-2 mt-2"
        placeholder="Сообщение..."
      ></input>
      <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded mt-2 flex items-center justify-center gap-4">
        <i className="fas fa-paper-plane"></i>
        <span>Отправить</span>
      </button>
    </div>
  );
};
