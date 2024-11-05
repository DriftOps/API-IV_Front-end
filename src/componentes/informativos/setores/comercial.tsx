import React from 'react';
import './setores.css';
import { useNavigate } from 'react-router-dom';

const Comercial: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="setores-container">
      <header className="header">
        <h1>Setor Comercial - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <div className="card-container">
          <div className="card">
            <i className="fas fa-shopping-cart"></i>
            <h3>Novas Vendas</h3>
            <p>As novas vendas do mês estão aumentando! Acompanhe os relatórios.</p>
          </div>
          <div className="card">
            <i className="fas fa-handshake"></i>
            <h3>Reunião de Vendas</h3>
            <p>Reunião de vendas agendada para o dia 30 de outubro, às 15h.</p>
          </div>
          <div className="card">
            <i className="fas fa-tags"></i>
            <h3>Promoções Atuais</h3>
            <p>Confira as promoções em andamento para aumentar as vendas.</p>
          </div>
          <div className="card">
            <i className="fas fa-chart-bar"></i>
            <h3>Relatório de Vendas</h3>
            <p>O relatório de vendas do último trimestre será enviado na próxima semana.</p>
          </div>
          <div className="card">
            <i className="fas fa-headset"></i>
            <h3>Atendimento ao Cliente</h3>
            <p>Lembrete: Priorizar o atendimento rápido e eficiente aos clientes.</p>
          </div>
          <div className="card">
            <i className="fas fa-comments"></i>
            <h3>Feedback de Clientes</h3>
            <p>Coletar feedback dos clientes sobre nossos serviços é essencial.</p>
          </div>
        </div>
      </section>
      <button onClick={handleVoltar}>Voltar</button>
    </div>
  );
};

export default Comercial;
