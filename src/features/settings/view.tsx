import { FC } from "react";
import { twMerge } from "tailwind-merge";
import { Button } from "../../shared/ui/button";
import { Input } from "../../shared/ui/input";
import { GroupTitle } from "../../shared/ui/group-title";
import { Select } from "../../shared/ui/select";
import { useEffectRunner, useSubscriptionRef } from "../../shared/effect-react";
import {
  settingsRef,
  SettingsStore,
  SettingsStoreType,
} from "../../shared/store/settings";
import { Effect } from "effect";

export const Settings: FC<BaseProps> = ({ className }) => {
  return (
    <div
      className={twMerge(
        " bg-gray-800 rounded-lg p-4 shadow-lg text-white",
        className,
      )}
    >
      <GroupTitle title="Настройки" className="mb-4" iconName="cogs" />

      <PlayerName className="mb-4" />
      {/* <Select className="mb-4" label="Тип подключения" options={options} /> */}
      <ConnectionType className="mb-4" />

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

const PlayerName: FC<BaseProps> = ({ className }) => {
  const playerName = useSubscriptionRef(settingsRef, (s) => s.playerName);
  const runner = useEffectRunner();

  return (
    <Input
      label="Ваше имя"
      value={playerName}
      onChange={(e) => {
        runner(
          SettingsStore.pipe(
            Effect.flatMap((s) => s.setPlayerName(e.target.value)),
          ),
        );
      }}
      className={className}
      placeholder="Ваше имя..."
    />
  );
};

const ConnectionType: FC<BaseProps> = ({ className }) => {
  const type = useSubscriptionRef(settingsRef, (s) => s.connectionType);
  const runner = useEffectRunner();
  return (
    <Select
      className={className}
      label="Тип подключения"
      options={options}
      value={type}
      onChange={(e) => {
        runner(
          SettingsStore.pipe(
            Effect.flatMap((s) =>
              s.changeConnectionType(
                e.target.value as SettingsStoreType["connectionType"],
              ),
            ),
          ),
        );
      }}
    />
  );
};

const options: [{ value: SettingsStoreType["connectionType"]; name: string }] =
  [
    { value: "offerer", name: "Создать игру" },
    { value: "answerer", name: "Присоединиться" },
  ];

interface BaseProps {
  className?: string;
}
