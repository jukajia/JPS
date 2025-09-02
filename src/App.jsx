import React, { useState, useEffect } from "react";
import UploadPlanilha from "./components/UploadPlanilha";
import Dashboard from "./components/Dashboard";

export default function App() {
  const [dados, setDados] = useState([]);

  // Tenta carregar do localStorage ao iniciar
  useEffect(() => {
    const dadosSalvos = localStorage.getItem("avaliacaoDados");
    if (dadosSalvos) setDados(JSON.parse(dadosSalvos));
  }, []);

  // Atualiza localStorage sempre que dados mudam
  useEffect(() => {
    localStorage.setItem("avaliacaoDados", JSON.stringify(dados));
  }, [dados]);

  return (
    <div className="min-h-screen p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-irani-green">
          Avaliação de Repositores - Irani Supermercados
        </h1>
      </header>

      <main className="space-y-6">
        <UploadPlanilha setDados={setDados} />
        <Dashboard dados={dados} />
      </main>
    </div>
  );
}
