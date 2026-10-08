import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "filled" | "outlined";

type ButtonColor = "primary" | "secondary";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: string;
  iconPosition?: "left" | "right";
  label?: string;
  iconOnly?: boolean;
}

const ButtonComponent = ({
  children,
  variant = "filled",
  color = "primary",
  icon,
  iconPosition = "left",
  className = "",
  disabled = false,
  type = "button",
  label,
  iconOnly = false,
  ...props
}: ButtonComponentProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50";

  const sizeClasses = iconOnly ? "h-10 w-10 p-0" : "px-5 py-2.5";

  const variantClasses = {
    filled: {
      primary: "bg-primary text-white hover:bg-primary/60",
      secondary: "bg-gray-700 text-white hover:bg-gray-800",
    },
    outlined: {
      primary:
        "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
      secondary:
        "border border-[var(--color-border)] bg-transparent text-[var(--color-text)] hover:bg-gray-700 hover:text-white",
    },
  };

  const classes = [
    baseClasses,
    sizeClasses,
    variantClasses[variant][color],
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon && (
        <span className="flex items-center">
          <i className={`bi bi-${icon}`} />
        </span>
      )}

      {!iconOnly && (children ?? label) && <span>{children ?? label}</span>}
    </button>
  );
};

export default ButtonComponent;
