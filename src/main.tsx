import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SelectedClientsProvider } from "./contexts/SelectedClientsContext";
import { NotificationProvider } from "./contexts/notification/NotificationContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <NotificationProvider>
      <SelectedClientsProvider>
        <App />
      </SelectedClientsProvider>
    </NotificationProvider>
  </React.StrictMode>
);
