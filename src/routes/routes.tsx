import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/LoginScreen";
import ClientListPage from "../pages/ClientListPage/ClientListPage";
import SelectedClientsPage from "../pages/SelectedClients/SelectedClientsPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/clientes" element={<ClientListPage />} />
      <Route path="/clientes-selecionados" element={<SelectedClientsPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
