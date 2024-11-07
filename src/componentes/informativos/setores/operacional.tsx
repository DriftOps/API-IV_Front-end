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
        <div className="card-container">
          <div className="card">
            <i className="fas fa-route"></i>
            <h3>Atualização de Rotas</h3>
            <p>As novas rotas estão disponíveis a partir de 15 de outubro.</p>
          </div>
          <div className="card">
            <i className="fas fa-users"></i>
            <h3>Novos Colaboradores</h3>
            <p>Sejam bem-vindos aos novos membros da equipe de logística!</p>
          </div>
          <div className="card">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Treinamento</h3>
            <p>O próximo treinamento será no dia 20 de outubro, às 10h.</p>
          </div>
          <div className="card">
            <i className="fas fa-shield-alt"></i>
            <h3>Segurança</h3>
            <p>Reforçamos a importância do uso de EPIs durante as operações.</p>
          </div>
          <div className="card">
            <i className="fas fa-tools"></i>
            <h3>Manutenção de Equipamentos</h3>
            <p>Verificação de manutenção preventiva agendada para a próxima semana.</p>
          </div>
          <div className="card">
            <i className="fas fa-warehouse"></i>
            <h3>Controle de Estoque</h3>
            <p>Acompanhe a movimentação de materiais e o controle de estoque diariamente.</p>
          </div>
          
        </div>
        <h2>TUTORIAIS OPERACIONAL</h2>
        <div className="card">
            <i className="fas fa-users"></i>
            <h3>Importancia do Setor Operacional</h3>
            <p>Conheça sobre como a sua função tem um papel importante na empresa!</p>
            <br></br>
            <iframe width="200" height="160" src="https://www.youtube.com/embed/ugBstYoDBBU?si=5fIwbHKuuUlH_VT9" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"></iframe>
          </div>
          <div className="card">
            <i className="fas fa-bus"></i>
            <h3>Operação Logística O que você precisa Saber!
            </h3>
            <p>Entenda os processos, as tarefas e os objetivos!</p>
            <br></br>
            <iframe width="200" height="160" src="https://www.youtube.com/embed/JRBK_0UYz48?si=4Nw0w6z0t1WJ519N" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
        <button onClick={handleVoltar}>Voltar</button>
      </section>
     
    </div>
  );
};

export default Operacional;
