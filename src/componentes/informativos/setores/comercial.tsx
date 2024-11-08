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
        <h2>TUTORIAIS COMERCIAL</h2>
        <div className="card-container">
        <div className="card">
            <i className="fas fa-users"></i>
            <h3>Importancia do Setor Comercial</h3>
            <p>Conheça sobre como a sua função tem um papel importante na empresa!</p>
            <br></br>
            <span>video</span>
          </div>
          <div className="card">
            <i className="fas fa-truck"></i>
            <h3>Conheça o Setor Comercial
            </h3>
            <p>Entenda os processos, as tarefas e os objetivos!</p>
            <br></br>
            <span>video</span>
          </div>
          <div className="card">
            <i className="fas fa-coin"></i>
            <h3>Entenda o que é Logística
            </h3>
            <p>Significado, O Que Faz? 06 Dicas Práticas pra Trabalhá-la no Seu Negócio</p>
            <br></br>
            
          </div>
          </div>
          <button onClick={handleVoltar}>Voltar</button>
      </section>
      
    </div>
  );
};

export default Comercial;
