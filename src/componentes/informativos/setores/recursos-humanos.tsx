import React from 'react';
import './setores.css';
import { useNavigate } from 'react-router-dom';

const RecursosHumanos: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="setores-container">
      <header className="header">
        <h1>Setor de Recursos Humanos - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <ul className="info-list">
          <li>Novas contratações: Damos boas-vindas aos nossos novos colaboradores!</li>
          <li>Revisão de benefícios: A revisão dos pacotes de benefícios será realizada em novembro.</li>
          <li>Treinamento e Desenvolvimento: O próximo workshop ocorrerá no dia 25 de outubro, às 14h.</li>
          <li>Feedbacks: Lembrete para todos os líderes: a coleta de feedbacks deve ser feita até o final do mês.</li>
        </ul>
      </section>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default RecursosHumanos;
