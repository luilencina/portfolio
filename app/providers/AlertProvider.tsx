import { createContext, useCallback, useContext, useState } from "react";

import AlertComponent from "~/components/alert/AlertComponent";

type AlertType = "success" | "error" | "warning" | "info";

type Alert = {
  id: number;
  type: AlertType;
  message: string;
};

type AlertContextData = {
  alerts: Alert[];
  showAlert: (type: AlertType, message: string) => void;
  closeAlert: (id: number) => void;
};

const AlertContext = createContext<AlertContextData | undefined>(undefined);

export function AlertProvider({ children }: { children: React.ReactNode }) {
  const [alerts, setAlerts] = useState<Alert[]>([]);

  const showAlert = useCallback((type: AlertType, message: string) => {
    const id = Date.now();

    setAlerts((current) => [...current, { id, type, message }]);

    setTimeout(() => {
      setAlerts((current) => current.filter((alert) => alert.id !== id));
    }, 5000);
  }, []);

  const closeAlert = useCallback((id: number) => {
    setAlerts((current) => current.filter((alert) => alert.id !== id));
  }, []);

  return (
    <AlertContext.Provider value={{ alerts, showAlert, closeAlert }}>
      {children}
    </AlertContext.Provider>
  );
}

export function useAlert() {
  const context = useContext(AlertContext);

  if (!context) {
    throw new Error("useAlert must be used inside an AlertProvider");
  }

  return context;
}

export function AlertContainer() {
  const { alerts, closeAlert } = useAlert();

  return (
    <div className="flex w-full flex-col gap-3">
      {alerts.map((alert) => (
        <AlertComponent
          key={alert.id}
          type={alert.type}
          message={alert.message}
          onClose={() => closeAlert(alert.id)}
        />
      ))}
    </div>
  );
}
