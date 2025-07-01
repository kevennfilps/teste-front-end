import { useEffect, useState } from "react";
import Sidebar from '../../components/Sidebar/Sidebar';
import Topbar from '../../components/Topbar/Topbar';
import ClientCard from '../../components/ClientCard/ClientCard';
import Pagination from '../../components/Pagination/Pagination';
import { getClients, type Client } from "../../services/clientService";
import './ClientListPage.scss';

export default function ClientListPage() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [clients, setClients] = useState<Client[]>([]);
  const [totalPages, setTotalPages] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [showCreateModal, setShowCreateModal] = useState(false);

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
                  <ClientCard key={client.id} client={client} />
                ))
            )}
          </div>
          <div className="client-create-footer">
            <button>Criar cliente</button>
          </div>
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={setCurrentPage}
        />
      </div>
    </div>
  );
}
