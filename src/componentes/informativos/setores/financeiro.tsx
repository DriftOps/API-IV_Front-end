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
          
        </div>
        <h2>TUTORIAIS FINANCEIRO</h2>
        <div className="card-container">
        <div className="card">
            <i className="fas fa-users"></i>
            <h3>Setor Financeiro
            </h3>
            <p> Saiba tudo sobre o setor financeiro!</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/wYJDafyNoB0?si=Y_52jQy-rlhG1u-e" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="card">
            <i className="fas fa-truck"></i>
            <h3>Controle Financeiro na Logística
            </h3>
            <p>Entenda os processos, as tarefas e os objetivos!</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/pOTQxjSAW2k?si=3o1U5jsRZy7WQKIE" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Setor financeiro: Qual a importância?
            </h3>
            <p>
            Tudo o que Você Precisa Saber sobre a Importância do Setor Financeiro
            </p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/ASb-WE5cSfI?si=vmQMBTEos9Y4dGC8" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          </div>
          <button onClick={handleVoltar}>Voltar</button>
        
      </section>
      
    </div>
  );
};

export default Financeiro;
