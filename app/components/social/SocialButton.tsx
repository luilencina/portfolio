import type { AnchorHTMLAttributes, ReactNode } from "react";

export type SocialNetwork = "github" | "linkedin" | "instagram" | "email";

export interface SocialButtonProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  network: SocialNetwork;
  href: string;
  label?: string;
  icon?: ReactNode;
}

const SocialButton = ({
  network,
  href,
  label,
  icon,
  className = "",
  target = "_blank",
  rel = "noopener noreferrer",
  ...props
}: SocialButtonProps) => {
  const icons: Record<SocialNetwork, string> = {
    github: "bi-github",
    linkedin: "bi-linkedin",
    instagram: "bi-instagram",
    email: "bi-envelope-fill",
  };

  const classes = [
    "inline-flex items-center justify-center",
    "h-10 w-10",
    "rounded-full",
    "text-[var(--color-text)]",
    "transition-all duration-200",
    "hover:bg-[var(--color-primary)]",
    "hover:text-white",
    "hover:-translate-y-0.5",
    "focus:outline-none",
    "focus:ring-2",
    "focus:ring-[var(--color-primary)]",
    "focus:ring-offset-2",
    "focus:ring-offset-[var(--color-background)]",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <a
      href={href}
      className={classes}
      target={target}
      rel={rel}
      aria-label={label ?? network}
      title={label ?? network}
      {...props}
    >
      {icon ?? <i className={`bi ${icons[network]} text-xl`} />}
    </a>
  );
};

export default SocialButton;
