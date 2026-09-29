import type { HTMLAttributes } from "react";

export type ChipVariant = "filled" | "outlined";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: ChipVariant;
  clickable?: boolean;
}

const Chip = ({
  label,
  variant = "outlined",
  clickable = false,
  className = "",
  ...props
}: ChipProps) => {
  const baseClasses =
    "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200";

  const variantClasses = {
    filled:
      "border border-[var(--color-primary)] bg-[var(--color-primary)] text-white hover:opacity-90",

    outlined:
      "border border-[var(--color-primary)] bg-transparent text-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white",
  };

  const classes = [
    baseClasses,
    variantClasses[variant],
    clickable ? "cursor-pointer" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <span
      className={classes}
      role={clickable ? "button" : undefined}
      tabIndex={clickable ? 0 : undefined}
      {...props}
    >
      {label}
    </span>
  );
};

export default Chip;
