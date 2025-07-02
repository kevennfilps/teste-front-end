import { FaPlus, FaPen, FaTrash } from "react-icons/fa";
import type { Client } from "../../services/clientService";
import "./ClientCard.scss";

export default function ClientCard({ client, onEdit, onDelete }: { client: Client, onEdit: () => void, onDelete: () => void }) {
  if (!client) return null;
  return (
    <div className="client-card">
      <div className="client-title">{client.name}</div>
      <div className="client-info">
        <div>Salário: R${client.salary.toLocaleString('pt-BR')}</div>
        <div>Empresa: R${client.companyValuation.toLocaleString('pt-BR')}</div>
      </div>
      <div className="card-actions">
        <FaPlus className="icon" />
        <FaPen className="icon" onClick={onEdit} />
        <FaTrash className="icon delete" onClick={onDelete} />
      </div>
    </div>
  );
}
