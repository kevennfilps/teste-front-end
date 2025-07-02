import "./SelectedClientsPage.scss";
import { useSelectedClients } from "../../contexts/SelectedClientsContext";

export default function SelectedClientsPage() {
  const { selectedClients, removeClient, clearClients } = useSelectedClients();

  return (
    <div className="selected-clients-root">
      <h2>Clientes selecionados:</h2>
      <div className="selected-clients-grid">
        {selectedClients.length === 0 ? (
          <div className="empty-message">Nenhum cliente selecionado.</div>
        ) : (
          selectedClients.map(client => (
            <div className="selected-client-card" key={client.id}>
              <b>{client.name}</b>
              <div>Salário: R${client.salary.toLocaleString("pt-BR")}</div>
              <div>Empresa: R${client.companyValuation.toLocaleString("pt-BR")}</div>
              <button className="remove-btn" onClick={() => removeClient(client.id)}>
                <span className="minus">_</span>
              </button>
            </div>
          ))
        )}
      </div>
      <button className="clear-btn" onClick={clearClients} disabled={selectedClients.length === 0}>
        Limpar clientes selecionados
      </button>
    </div>
  );
}
