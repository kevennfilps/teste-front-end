import { createContext, useContext, useState, type ReactNode } from "react";
import type { Client } from "../services/clientService";

interface SelectedClientsContextProps {
  selectedClients: Client[];
  addClient: (client: Client) => void;
  removeClient: (id: number) => void;
  clearClients: () => void;
  isSelected: (id: number) => boolean;
}

const SelectedClientsContext = createContext<SelectedClientsContextProps | undefined>(undefined);

export function SelectedClientsProvider({ children }: { children: ReactNode }) {
  const [selectedClients, setSelectedClients] = useState<Client[]>([]);

  const addClient = (client: Client) => {
    setSelectedClients(prev =>
      prev.some(c => c.id === client.id) ? prev : [...prev, client]
    );
  };

  const removeClient = (id: number) => {
    setSelectedClients(prev => prev.filter(c => c.id !== id));
  };

  const clearClients = () => setSelectedClients([]);

  const isSelected = (id: number) => selectedClients.some(c => c.id === id);

  return (
    <SelectedClientsContext.Provider
      value={{ selectedClients, addClient, removeClient, clearClients, isSelected }}
    >
      {children}
    </SelectedClientsContext.Provider>
  );
}

// Hook para consumir em qualquer componente
export function useSelectedClients() {
  const ctx = useContext(SelectedClientsContext);
  if (!ctx) throw new Error("useSelectedClients deve estar dentro do SelectedClientsProvider");
  return ctx;
}
