import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import ClientListPage from "./pages/ClientListPage/ClientListPage";
import SelectedClientsPage from "./pages/SelectedClients/SelectedClientsPage";
import LoginScreen from "./pages/login/LoginScreen";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/clientes" element={<ClientListPage />} />
          <Route path="/clientes-selecionados" element={<SelectedClientsPage />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
      </Routes>
    </BrowserRouter>
  );
}
