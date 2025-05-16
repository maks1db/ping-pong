import { FC, SelectHTMLAttributes } from "react";

export const Select: FC<SelectProps> = ({
  className,
  label,
  options,
  ...rest
}) => {
  return (
    <div className={className}>
      <label className="block text-sm font-medium mb-1">{label}</label>
      <select
        className="w-full bg-gray-700 border border-gray-600 rounded px-3 py-2"
        {...rest}
      >
        {options.map((x) => (
          <option value={x.value} key={x.value}>
            {x.name}
          </option>
        ))}
      </select>
    </div>
  );
};

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string;
  options: Option[];
}

interface Option {
  name: string;
  value: string | number;
}
