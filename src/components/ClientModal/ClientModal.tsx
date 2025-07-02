import { useState } from "react";
import { createClient } from "../../services/clientService";
import "./ClientModal.scss";

interface CreateClientModalProps {
  open: boolean;
  onClose: () => void;
  onSuccess: () => void;
}

export default function CreateClientModal({ open, onClose, onSuccess }: CreateClientModalProps) {
  const [name, setName] = useState("");
  const [salary, setSalary] = useState("");
  const [companyValuation, setCompanyValuation] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  if (!open) return null;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    if (!name.trim() || !salary.trim() || !companyValuation.trim()) {
      setError("Preencha todos os campos!");
      return;
    }

    setLoading(true);
    try {
      await createClient({
        name,
        salary: Number(salary),
        companyValuation: Number(companyValuation),
      });
      setName("");
      setSalary("");
      setCompanyValuation("");
      onSuccess();
      onClose();
    } catch (err) {
      setError("Erro ao cadastrar cliente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <b>Criar cliente:</b>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <form className="modal-form" onSubmit={handleSubmit}>
          <input
            placeholder="Digite o nome:"
            value={name}
            onChange={e => setName(e.target.value)}
            disabled={loading}
          />
          <input
            placeholder="Digite o salário:"
            type="number"
            min="0"
            value={salary}
            onChange={e => setSalary(e.target.value)}
            disabled={loading}
          />
          <input
            placeholder="Digite o valor da empresa:"
            type="number"
            min="0"
            value={companyValuation}
            onChange={e => setCompanyValuation(e.target.value)}
            disabled={loading}
          />
          {error && <div className="modal-error">{error}</div>}
          <button type="submit" disabled={loading}>
            {loading ? "Cadastrando..." : "Criar cliente"}
          </button>
        </form>
      </div>
    </div>
  );
}
