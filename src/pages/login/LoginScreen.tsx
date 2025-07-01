import { useState } from "react";
import "./LoginScreen.css";
import { useNavigate } from "react-router-dom";

export default function LoginScreen() {
  const [nome, setNome] = useState("");
  const navigate = useNavigate();

  function handleEntrar() {
    if (nome.trim()) {
      localStorage.setItem("usuario", nome);
      navigate("/clientes");
    }
  }

  return (
    <div className="login-outer">
      <div className="login-container">
        <div className="login-title">Olá, seja bem-vindo!</div>
        <input
          className="login-input"
          placeholder="Digite o seu nome:"
          value={nome}
          onChange={e => setNome(e.target.value)}
        />
        <button
          className="login-button"
          onClick={handleEntrar}
        >
          Entrar
        </button>
      </div>
    </div>
  );
}
