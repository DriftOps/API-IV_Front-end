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
        <div className="card-container">
          <div className="card">
            <i className="fas fa-user-plus"></i>
            <h3>Novas Contratações</h3>
            <p>Damos boas-vindas aos nossos novos colaboradores!</p>
          </div>
          <div className="card">
            <i className="fas fa-gift"></i>
            <h3>Revisão de Benefícios</h3>
            <p>A revisão dos pacotes de benefícios será realizada em novembro.</p>
          </div>
          <div className="card">
            <i className="fas fa-chalkboard-teacher"></i>
            <h3>Treinamento e Desenvolvimento</h3>
            <p>O próximo workshop ocorrerá no dia 25 de outubro, às 14h.</p>
          </div>
          <div className="card">
            <i className="fas fa-comments"></i>
            <h3>Feedbacks</h3>
            <p>Os líderes devem coletar feedbacks até o final do mês.</p>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Avaliação de Desempenho</h3>
            <p>As avaliações de desempenho serão realizadas no próximo trimestre.</p>
          </div>
          <div className="card">
            <i className="fas fa-heartbeat"></i>
            <h3>Bem-estar dos Colaboradores</h3>
            <p>Participe das ações voltadas ao bem-estar dos colaboradores.</p>
          </div>
        </div>
        <h2>TUTORIAIS RECURSOS HUMANOS</h2>
        <div className="card-container">
        <div className="card">
            <i className="fas fa-users"></i>
            <h3>Importancia do Setor de Recursos Humanos</h3>
            <p>O que faz um profissional de Recursos Humanos</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/oXWK8IwjDmQ?si=xdYV-4cZDcreJgqj" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="card">
            <i className="fas fa-truck"></i>
            <h3>Gestão de Recursos Humanos: 6 principais atividades do RH 
            </h3>
            <p>Entenda os processos, as tarefas e os objetivos!</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/eaqvm7PYhhQ?si=fUMBNkXMIzHkftsn" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Você sabe TODAS FUNÇÕES do setor de RECURSOS HUMANOS?</h3>
            <p>
            Conheça sobre sua função e abra sua mente!
            </p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/tvCbhPBWf8g?si=mbclokSaQ7Z6wGlb" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          </div>
          <button onClick={handleVoltar}>Voltar</button>
      </section>
      
    </div>
  );
};

export default RecursosHumanos;
