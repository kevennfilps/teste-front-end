import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import type { Client } from "../../services/clientService";
import { useSelectedClients } from "../../contexts/SelectedClientsContext";
import "./ClientCard.scss";

interface ClientCardProps {
  client: Client;
  onEdit: () => void;
  onDelete: () => void;
  onSelect?: () => void;
  isSelected?: boolean;
}

export default function ClientCard({
  client,
  onEdit,
  onDelete,
}: ClientCardProps) {
  if (!client) return null;
  const { addClient, isSelected } = useSelectedClients();
  return (
    <div className="client-card">
      <div className="client-title">{client.name}</div>
      <div className="client-info">
        <div>Salário: R${client.salary.toLocaleString('pt-BR')}</div>
        <div>Empresa: R${client.companyValuation.toLocaleString('pt-BR')}</div>
      </div>
      <div className="card-actions">
        <FaPlus
          className={`icon select ${isSelected(client.id) ? "selected" : ""}`}
          onClick={() => !isSelected(client.id) && addClient(client)}
          title={isSelected(client.id) ? "Já selecionado" : "Selecionar"}
          style={{
            color: isSelected(client.id) ? "#f37021" : "#232323",
            cursor: isSelected(client.id) ? "not-allowed" : "pointer",
            opacity: isSelected(client.id) ? 0.7 : 1,
          }}
        />
        <FaPen className="icon" onClick={onEdit} />
        <FaTrash className="icon delete" onClick={onDelete} />
      </div>
    </div>
  );
}
