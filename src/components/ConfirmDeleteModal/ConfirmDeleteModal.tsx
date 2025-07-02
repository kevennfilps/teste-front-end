import "./ConfirmDeleteModal.scss";

interface ConfirmDeleteModalProps {
  open: boolean;
  onClose: () => void;
  onConfirm: () => void;
  clientName?: string;
}

export default function ConfirmDeleteModal({ open, onClose, onConfirm, clientName }: ConfirmDeleteModalProps) {
  if (!open) return null;
  return (
    <div className="modal-backdrop">
      <div className="modal">
        <div className="modal-header">
          <b>Excluir cliente:</b>
          <button className="close-btn" onClick={onClose}>&times;</button>
        </div>
        <div className="modal-message">
          Você está prestes a excluir o cliente: <b>{clientName}</b>
        </div>
        <button className="delete-btn" onClick={onConfirm}>
          Excluir cliente
        </button>
      </div>
    </div>
  );
}
