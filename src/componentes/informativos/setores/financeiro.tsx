import React from 'react';
import './setores.css';
import { useNavigate } from 'react-router-dom';

const Financeiro: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="setores-container">
      <header className="header">
        <h1>Setor Financeiro - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <div className="card-container">
          <div className="card">
            <i className="fas fa-file-alt"></i>
            <h3>Relatório Financeiro</h3>
            <p>O relatório financeiro de setembro estará disponível até o dia 5 de outubro.</p>
          </div>
          <div className="card">
            <i className="fas fa-money-check-alt"></i>
            <h3>Pagamentos</h3>
            <p>Todos os fornecedores devem enviar faturas até o dia 15 de outubro.</p>
          </div>
          <div className="card">
            <i className="fas fa-calendar-check"></i>
            <h3>Reunião</h3>
            <p>A próxima reunião de planejamento financeiro será no dia 28 de outubro, às 9h.</p>
          </div>
          <div className="card">
            <i className="fas fa-calculator"></i>
            <h3>Orçamento</h3>
            <p>Lembrete: as propostas de orçamento devem ser entregues até o final do mês.</p>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Investimentos</h3>
            <p>Revisão e planejamento de investimentos futuros estão agendados para a próxima semana.</p>
          </div>
          <div className="card">
            <i className="fas fa-wallet"></i>
            <h3>Controle de Despesas</h3>
            <p>Os relatórios de despesas devem ser analisados e ajustados até o final do mês.</p>
          </div>
          <button onClick={handleVoltar}>Voltar</button>
        </div>
      </section>
      
    </div>
  );
};

export default Financeiro;
