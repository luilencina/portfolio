import type { HTMLAttributes } from "react";

export type ChipVariant = "filled" | "outlined";

type ChipColor = "primary" | "secondary" | "white";

interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  label: string;
  variant?: ChipVariant;
  clickable?: boolean;
  color?: ChipColor;
}

const Chip = ({
  label,
  variant = "outlined",
  clickable = false,
  className = "",
  color = "primary",
  ...props
}: ChipProps) => {
  const isWhite = color === "white";
  const hoverClasses = isWhite
    ? "hover:bg-[var(--text-white)] hover:text-[var(--color-primary)]"
    : "hover:bg-[var(--color-primary)] hover:text-white";

  const variantClasses = {
    filled: `
      border
      border-[var(--color-${color})]
      bg-[var(--color-${color})]
      text-white
      ${hoverClasses}
    `,

    outlined: `
      border
      border-[var(--color-${color})]
      bg-transparent
      text-[var(--color-${color})]
      ${hoverClasses}
    `,
  };

  const classes = [
    "inline-flex items-center rounded-full px-3 py-1.5 text-sm font-medium transition-all duration-200",
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
