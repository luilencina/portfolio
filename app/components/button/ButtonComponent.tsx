import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "filled" | "outlined";
type ButtonColor = "primary" | "secondary";

interface ButtonComponentProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: ReactNode;
  variant?: ButtonVariant;
  color?: ButtonColor;
  icon?: ReactNode;
  iconPosition?: "left" | "right";
  label?: string;
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
  ...props
}: ButtonComponentProps) => {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50";

  const variantClasses = {
    filled: {
      primary: "bg-primary text-white hover:bg-primary/60",
      secondary: "bg-gray-700 text-white hover:bg-gray-800",
    },

    outlined: {
      primary:
        "border border-primary bg-transparent text-primary hover:bg-primary hover:text-white",
      secondary:
        "border border-gray-700 bg-transparent text-gray-700 hover:bg-gray-700 hover:text-white",
    },
  };

  const classes = [baseClasses, variantClasses[variant][color], className]
    .filter(Boolean)
    .join(" ");

  return (
    <button type={type} className={classes} disabled={disabled} {...props}>
      {icon && iconPosition === "left" && (
        <span className="flex items-center">{icon}</span>
      )}

      {(children ?? label) && <span>{children ?? label}</span>}

      {icon && iconPosition === "right" && (
        <span className="flex items-center">{icon}</span>
      )}
    </button>
  );
};

export default ButtonComponent;
