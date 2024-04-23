import { IconType } from "react-icons";

export default function Button({
  Icon,
  onClick,
  title,
  className,
}: {
  Icon?: IconType;
  onClick?: React.MouseEventHandler;
  title?: string;
  className?: string;
}) {
  return (
    <button className={`rounded flex justify-start gap-2 items-center bg-slate-100 dark:bg-slate-600 hover:bg-slate-300 dark:hover:bg-slate-500 px-2 py-1 secondary-text text-xs ${className}`} onClick={onClick}>
      {Icon && <Icon />}
      <span>{title}</span>
    </button>
  );
}
