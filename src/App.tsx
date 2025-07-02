import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./pages/Layout";
import ClientListPage from "./pages/ClientListPage/ClientListPage";
import SelectedClientsPage from "./pages/SelectedClients/SelectedClientsPage";
import LoginScreen from "./pages/login/LoginScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LoginScreen />} />
        
        <Route path="/" element={<Navigate to="/login" replace />} />

        <Route element={<Layout />}>
          <Route path="/clientes" element={<ClientListPage />} />
          <Route path="/clientes-selecionados" element={<SelectedClientsPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
