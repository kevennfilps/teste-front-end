import { useState } from "react";
import "./LoginScreen.css";

export default function LoginScreen() {
  const [nome, setNome] = useState("");

  const handleEntrar = () => {
    if (nome.trim()) {
      console.log(`Bem-vindo, ${nome}`);
      // Aqui você pode redirecionar, salvar nome, etc.
    }
  };

  return (
    <div className="login-container">
      <div>
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
