// Sidebar.tsx
import { FaHome, FaUsers, FaUserCheck, FaTimes } from "react-icons/fa";
import "./Sidebar.scss";

type SidebarProps = {
  open: boolean;
  onClose: () => void;
};

export default function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <aside className={`sidebar-drawer ${open ? "open" : ""}`}>
      <button className="close-btn" onClick={onClose}>
        <FaTimes size={20} />
      </button>
      <nav>
        <ul>
          <li className="active"><FaHome /> <span>Home</span></li>
          <li><FaUsers /><span>Clientes</span></li>
          <li><FaUserCheck /><span>Clientes selecionados</span></li>
        </ul>
      </nav>
      {open && <div className="backdrop" onClick={onClose} />}
    </aside>
  );
}
