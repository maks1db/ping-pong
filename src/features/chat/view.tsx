import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { GroupTitle } from "../../shared/ui/group-title";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";

export const Chat: FC<{ className?: string }> = ({ className }) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-lg p-4 shadow-lg text-white flex flex-col",
        className,
      )}
    >
      <GroupTitle title="Чат" iconName="comments" className="mb-4" />

      <div className="h-40 overflow-y-auto bg-slate-500 rounded px-2.5 text-white bg-opacity-30"></div>

      <Input
        label="Сообщение"
        placeholder="Введите сообщение..."
        className="mt-2"
      />

      <Button
        title="Отправить"
        variant="blue"
        iconName="paper-plane"
        className="mt-2"
      />
    </div>
  );
};
