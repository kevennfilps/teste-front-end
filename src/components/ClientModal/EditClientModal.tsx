import { useState, useEffect } from "react";
import { updateClient, type Client } from "../../services/clientService";
import "./ClientModal.scss";

interface EditClientModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
  client: Client | null;
}

export default function EditClientModal({ open, onClose, onSuccess, client }: EditClientModalProps) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [companyValuation, setCompanyValuation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (client && open) {
      setName(client.name);
      setSalary(String(client.salary));
      setCompanyValuation(String(client.companyValuation));
      setError(null);
    }
  }, [client, open]);

  if (!open || !client) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !salary.trim() || !companyValuation.trim()) {
      setError("Preencha todos os campos!");
      return;
    }
    setLoading(true);
    try {
      await updateClient(client.id, {
        name,
        salary: Number(salary),
        companyValuation: Number(companyValuation),
      });
      onSuccess();
      onClose();
    } catch (err) {
      setError("Erro ao editar cliente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <b>Editar cliente:</b>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />
          <input
            placeholder="Salário"
            type="number"
            min="0"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            disabled={loading}
          />
          <input
            placeholder="Valor da empresa"
            type="number"
            min="0"
            value={companyValuation}
            onChange={e => setCompanyValuation(e.target.value)}
            disabled={loading}
          />
          {error && <div className="modal-error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? "Salvando..." : "Editar cliente"}
          </button>
        </form>
      </div>
    </div>
  );
}
