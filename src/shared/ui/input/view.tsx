import { FC, InputHTMLAttributes } from "react";

export const Input: FC<InputProps> = ({ className, label, ...rest }) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <input
        type="text"
        className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
        placeholder="Вставьте код здесь"
        {...rest}
      ></input>
    </div>
  );
};

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}
