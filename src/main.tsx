import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { SelectedClientsProvider } from "./contexts/SelectedClientsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
      <SelectedClientsProvider>
        <App />
      </SelectedClientsProvider>
  </React.StrictMode>
);
