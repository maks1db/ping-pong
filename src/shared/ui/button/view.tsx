import { ButtonHTMLAttributes, FC } from "react";

import { cva } from "class-variance-authority";

export const Button: FC<ButtonProps> = ({
  variant,
  className,
  iconName,
  title,
  ...rest
}) => {
  return (
    <button className={button({ variant, className })} {...rest}>
      {iconName && <i className={`fas fa-${iconName}`}></i>}
      <span>{title}</span>
    </button>
  );
};

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  iconName?: string;
  title: string;
  variant: "yellow" | "green" | "red" | "blue";
}

export const button = cva(
  "flex items-center w-full px-3 py-2 rounded justify-center gap-4",
  {
    variants: {
      variant: {
        yellow: "bg-yellow-500 hover:bg-yellow-600 text-gray-900",
        green: "bg-green-600 hover:bg-green-700 text-white",
        red: "bg-red-600 hover:bg-red-700 text-white",
        blue: "bg-blue-600 hover:bg-blue-700 text-white",
      },
    },
  },
);
