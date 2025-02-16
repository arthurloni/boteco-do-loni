import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [convidados, setConvidados] = useState([]);

  const confirmarPresenca = () => {
    if (nome.trim() !== "") {
        setConvidados([...convidados, nome]);
        setNome("");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-yellow-100 p-4">
      <div className="bg-white p-6 rounded-2xl shadow-xl text-center max-w-lg w-full">
        <h1 className="text-3xl font-bold text-red-600">🍻 Boteco do Loni 🍻</h1>
        <p className="text-lg mt-2">Você está convidado para o aniversário!</p>
        <p className="mt-1 font-semibold">Dia 15/03 às 18:00 horas</p>
        <p className="mt-2 text-sm text-gray-700">Traga carne e o que for beber!</p>
        
        <div className="mt-4">
          <input
            type="text"
            className="border p-2 rounded-lg w-full"
            placeholder="Digite seu nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
          <button
            className="mt-2 bg-red-600 text-white px-4 py-2 rounded-lg w-full"
            onClick={confirmarPresenca}
          >
            Confirmar Presença
          </button>
        </div>

        <h2 className="mt-4 font-bold text-lg">✅ Lista de Confirmados:</h2>
        <ul className="mt-2 text-left list-disc list-inside">
          {convidados.map((convidado, index) => (
            <li key={index} className="text-gray-800">{convidado}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
