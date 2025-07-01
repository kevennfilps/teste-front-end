import { Routes, Route, Navigate } from "react-router-dom";
import Login from "../pages/login/LoginScreen";
import ClientListPage from "../pages/ClientListPage/ClientListPage";


export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/clientes" element={<ClientListPage />} />
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
}
