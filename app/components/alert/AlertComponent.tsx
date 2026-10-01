import type { ReactNode } from "react";

type AlertType = "success" | "error" | "warning" | "info";

type AlertComponentProps = {
  type?: AlertType;
  message: string;
  icon?: ReactNode;
  onClose?: () => void;
};

export default function AlertComponent({
  type = "info",
  message,
  icon,
  onClose,
}: AlertComponentProps) {
  const styles: Record<AlertType, string> = {
    success: "border-green-500/20 bg-green-500/10 text-green-500",
    error: "border-red-500/20 bg-red-500/10 text-red-500",
    warning: "border-yellow-500/20 bg-yellow-500/10 text-yellow-500",
    info: "border-primary/20 bg-primary/10 text-primary",
  };

  const icons: Record<AlertType, string> = {
    success: "bi-check-circle-fill",
    error: "bi-x-circle-fill",
    warning: "bi-exclamation-triangle-fill",
    info: "bi-info-circle-fill",
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-xl border p-4 text-sm ${styles[type]}`}
      role="alert"
    >
      <i className={`bi ${icons[type]} shrink-0 text-lg`} />

      <span className="flex-1">{message}</span>

      {onClose && (
        <button
          type="button"
          onClick={onClose}
          className="shrink-0 opacity-70 transition-opacity hover:opacity-100"
          aria-label="Close alert"
        >
          {icon ?? <i className="bi bi-x-lg" />}
        </button>
      )}
    </div>
  );
}
