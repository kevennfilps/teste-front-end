import { FaHome, FaUsers, FaUserCheck, FaChevronLeft } from "react-icons/fa";
import { useNavigate, useLocation } from "react-router-dom";
import "./Sidebar.scss";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export default function Sidebar({ open, onClose }: SidebarProps) {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <aside className={`sidebar${open ? " open" : ""}`}>
      <div className="sidebar-logo-block">
          <img
            src="/logo.png"
            alt="teddy"
            style={{ height: 36 }}
            className="sidebar-logo-img"
          />
      </div>
      <nav>
        {open && (
          <button className="close-btn" onClick={onClose}>
            <FaChevronLeft size={22} />
          </button>
        )}
        <ul>
          <li
            className={location.pathname === "/" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => {
              onClose();
            }}
          >
            <FaHome />
            {open && <span>Home</span>}
          </li>
          <li
            className={location.pathname === "/clientes" ? "active" : ""}
            style={{ cursor: "pointer" }}
            onClick={() => {
              navigate("/clientes");
              onClose();
            }}
          >
            <FaUsers />
            {open && <span>Clientes</span>}
          </li>
          <li
            className={location.pathname === "/clientes-selecionados" ? "active" : ""}
            style={{ cursor: "pointer", marginLeft: -3 }}
            onClick={() => {
              navigate("/clientes-selecionados");
              onClose();
            }}
          >
            <FaUserCheck />
            {open && <span >Clientes Selecionados</span>}
          </li>
        </ul>
      </nav>
    </aside>
  );
}

