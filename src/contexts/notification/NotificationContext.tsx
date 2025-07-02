import React, { createContext, useContext, useState } from "react";

type NotificationType = "success" | "error" | "info";

interface NotificationContextProps {
  notify: (message: string, type?: NotificationType) => void;
}

const NotificationContext = createContext<NotificationContextProps>({ notify: () => {} });

export const useNotification = () => useContext(NotificationContext);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notification, setNotification] = useState<{ message: string, type: NotificationType } | null>(null);

  const notify = (message: string, type: NotificationType = "success") => {
    setNotification({ message, type });
    setTimeout(() => setNotification(null), 3000);
  };

  return (
    <NotificationContext.Provider value={{ notify }}>
      {children}
      {notification && (
        <div className={`toast toast-${notification.type}`}>
          {notification.message}
        </div>
      )}
    </NotificationContext.Provider>
  );
};
