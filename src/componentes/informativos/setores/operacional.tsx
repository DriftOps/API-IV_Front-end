import React from 'react';
import './setores.css';
import { useNavigate } from 'react-router-dom';

const Operacional: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="setores-container">
      <header className="header">
        <h1>Setor Operacional - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <ul className="info-list">
          <li>Atualização de rotas: As novas rotas estão disponíveis a partir de 15 de outubro.</li>
          <li>Novos colaboradores: Sejam bem-vindos aos novos membros da equipe de logística!</li>
          <li>Treinamento: O próximo treinamento será no dia 20 de outubro, às 10h.</li>
          <li>Segurança: Reforçamos a importância do uso de EPIs durante as operações.</li>
        </ul>
      </section>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default Operacional;
