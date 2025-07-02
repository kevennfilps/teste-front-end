import { FaBars } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Topbar.scss";

interface TopbarProps {
  onMenuClick: () => void;
  sidebarOpen: boolean;
  userName?: string;

}

export default function Topbar({ onMenuClick, sidebarOpen, userName }: TopbarProps) {
  userName = localStorage.getItem("usuario") || "Usuário";
  const navigate = useNavigate();
  const location = useLocation();

  function handleLogout() {
    navigate("/login");
  }

  return (
    <header className="topbar">
      {!sidebarOpen && (
        <button className="menu-btn" onClick={onMenuClick}>
          <FaBars size={22} />
        </button>
      )}
      {!sidebarOpen && (
        <div className="logo">
          <img src="/logo.png" alt="teddy" style={{ height: 36 }} />
        </div>
      )}
      <nav>
        <span
          className={location.pathname === "/clientes" ? "active" : ""}
          style={{ cursor: "pointer", marginRight: 28 }}
          onClick={() => navigate("/clientes")}
        >
          Clientes
        </span>
        <span
          className={location.pathname === "/clientes-selecionados" ? "active" : ""}
          style={{ cursor: "pointer", marginRight: 28 }}
          onClick={() => navigate("/clientes-selecionados")}
        >
          Clientes selecionados
        </span>
        <span
          style={{ cursor: "pointer" }}
          onClick={handleLogout}
        >
          Sair
        </span>
      </nav>
      <div className="username">
        Olá, <strong>{userName || "Usuário"}</strong>
      </div>
    </header>
  );
}
