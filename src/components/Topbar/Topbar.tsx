import { FaBars } from "react-icons/fa";
import "./Topbar.scss";

interface TopbarProps {
  onMenuClick: () => void;
  userName?: string;
}

export default function Topbar({ onMenuClick, userName }: TopbarProps) {
  userName = localStorage.getItem("usuario") || "Usuário";
  return (
    <header className="topbar">
      <button className="menu-btn" onClick={onMenuClick}>
        <FaBars size={22} />
      </button>
      <div className="logo">teddy</div>
      <nav>
        <a href="#" className="active">Clientes</a>
        <a href="#">Clientes selecionados</a>
        <a href="#">Sair</a>
      </nav>
      <div className="username">
        Olá, <strong>{userName || "Usuário"}</strong>
      </div>
    </header>
  );
}
