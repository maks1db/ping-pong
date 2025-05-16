import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { GroupTitle } from "../../shared/ui/group-title";
import { Select } from "../../shared/ui/select";

export const Settings: FC<SettingsProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-lg p-4 shadow-lg text-white",
        className,
      )}
    >
      <GroupTitle title="Настройки" className="mb-4" iconName="cogs" />
      <Input label="Ваше имя" value={"Игрок"} className="mb-4" />

      <Select className="mb-4" label="Тип подключения" options={options} />

      <div className="mb-4 flex flex-col">
        <Input label="Код подключения" readOnly />

        <Button
          iconName="copy"
          variant="yellow"
          className="mt-2"
          title="Копировать"
        />

        <p className="text-xs text-gray-400 mt-1">
          Отправьте этот код другому игроку
        </p>
      </div>

      <div className="mb-4">
        <Input
          placeholder="Вставьте код здесь"
          label="Введите код подключения"
        />
      </div>

      <Button title="Подключиться" variant="green" iconName="plug" />
      <Button title="Отключиться" variant="red" iconName="times" />

      <div className="mt-6">
        <GroupTitle
          title="Статус игры"
          className="mb-2"
          iconName="info-circle"
        />

        <div className="text-sm">Ожидание подключения игроков...</div>
      </div>
    </div>
  );
};

const options = [
  { value: "offerer", name: "Создать игру" },
  { value: "answerer", name: "Присоединиться" },
];

interface SettingsProps {
  className?: string;
}
