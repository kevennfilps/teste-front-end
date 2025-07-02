import { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import ClientCard from '../../components/ClientCard/ClientCard';
import Pagination from '../../components/Pagination/Pagination';
import { getClients, type Client } from "../../services/clientService";
import './ClientListPage.scss';
import CreateClientModal from "../../components/ClientModal/ClientModal";
import EditClientModal from "../../components/ClientModal/EditClientModal";
import ConfirmDeleteModal from "../../components/ConfirmDeleteModal/ConfirmDeleteModal";
import { deleteClient } from "../../services/clientService";

export default function ClientListPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [clientToEdit, setClientToEdit] = useState<Client | null>(null);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [deleteModalOpen, setDeleteModalOpen] = useState(false);
  const [clientToDelete, setClientToDelete] = useState<Client | null>(null);

  const pageSize = 12;

  useEffect(() => {
    setLoading(true);
    getClients(currentPage, pageSize)
      .then(res => {
        setClients(res.clients);
        setTotalPages(res.totalPages);
        setCurrentPage(res.currentPage);
      })
      .finally(() => setLoading(false));
  }, [currentPage]);

  const handleOpenEditModal = (client: Client) => {
    setClientToEdit(client);
    setEditModalOpen(true);
  };

  const handleCreateSuccess = () => {
    getClients(currentPage, pageSize)
      .then(res => {
        setClients(res.clients);
        setTotalPages(res.totalPages);
        setCurrentPage(res.currentPage);
      });
  };

  const refreshClients = () => {
    getClients(currentPage, pageSize)
      .then(res => {
        setClients(res.clients);
        setTotalPages(res.totalPages);
        setCurrentPage(res.currentPage);
      });
  };

  const handleDelete = async () => {
    if (clientToDelete) {
      await deleteClient(clientToDelete.id);
      setDeleteModalOpen(false);
      setClientToDelete(null);
      refreshClients();
    }
  };

  return (
    <div className="layout-root">
      <Topbar onMenuClick={() => setSidebarOpen(true)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />
      <div className="layout-main">
        <div className="content-center">
          <div className="client-list-header">
            <strong>{clients.length} clientes encontrados:</strong>
            <div>
              Clientes por página:{" "}
              <select disabled>
                <option>{pageSize}</option>
              </select>
            </div>
          </div>
          <div className="client-list-grid">
            {loading ? (
              <div>Carregando...</div>
            ) : (
              clients
                .filter(client => !!client)
                .map((client) => (
                  <ClientCard 
                    key={client.id}
                    client={client}
                    onEdit={() => handleOpenEditModal(client)}
                    onDelete={() => {
                      setClientToDelete(client);
                      setDeleteModalOpen(true);
                    }}
                  />
                ))
            )}
          </div>
          <div className="client-create-footer">
            <button onClick={() => setShowCreateModal(true)}>Criar cliente</button>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
      <EditClientModal
        open={editModalOpen}
        onClose={() => setEditModalOpen(false)}
        onSuccess={refreshClients}
        client={clientToEdit}
      />
      <CreateClientModal
        open={showCreateModal}
        onClose={() => setShowCreateModal(false)}
        onSuccess={handleCreateSuccess}
      />
      <ConfirmDeleteModal
        open={deleteModalOpen}
        onClose={() => setDeleteModalOpen(false)}
        onConfirm={handleDelete}
        clientName={clientToDelete?.name}
      />
    </div>
  );
}
