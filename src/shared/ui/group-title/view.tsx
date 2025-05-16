import { FC } from "react";
import { twMerge } from "tailwind-merge";

export const GroupTitle: FC<GroupTitleProps> = ({
  className,
  title,
  iconName,
}) => {
  return (
    <h2
      className={twMerge(
        "text-xl font-semibold  border-b border-gray-700 pb-2 flex items-center gap-4",
        className,
      )}
    >
      <i className={`fas fa-${iconName}`}></i> <span>{title}</span>
    </h2>
  );
};

interface GroupTitleProps {
  className?: string;
  title: string;
  iconName?: string;
}
