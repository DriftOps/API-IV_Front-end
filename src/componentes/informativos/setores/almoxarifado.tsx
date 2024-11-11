import React from 'react';
import './setores.css';
import { useNavigate } from 'react-router-dom';

const Almoxarifado: React.FC = () => {
  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };

  return (
    <div className="setores-container">
      <header className="header">
        <h1>Setor de Almoxarifado - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <div className="card-container">
          <div className="card">
            <i className="fas fa-calendar-alt"></i>
            <h3>Inventário</h3>
            <p>O próximo inventário será realizado nos dias 10 e 11 de novembro.</p>
          </div>
          <div className="card">
            <i className="fas fa-truck"></i>
            <h3>Recebimento de materiais</h3>
            <p>Novas entregas de materiais estão programadas para o dia 15 de outubro.</p>
          </div>
          <div className="card">
            <i className="fas fa-broom"></i>
            <h3>Organização</h3>
            <p>Pedimos que todos os colaboradores mantenham as áreas organizadas e limpas.</p>
          </div>
          <div className="card">
            <i className="fas fa-box"></i>
            <h3>Reabastecimento</h3>
            <p>Verifiquem os estoques e solicitem reabastecimento até o dia 20 de outubro.</p>
          </div>
          <div className="card">
            <i className="fas fa-clipboard-check"></i>
            <h3>Controle de Qualidade</h3>
            <p>Verifiquem a qualidade dos materiais recebidos e armazenados.</p>
          </div>
          <div className="card">
            <i className="fas fa-hard-hat"></i>
            <h3>Segurança no Trabalho</h3>
            <p>Utilize os equipamentos de proteção adequados durante o trabalho.</p>
          </div>
          
        </div>
        <h2>TUTORIAIS ALMOXARIFADO</h2>
        <div className="card-container">
        <div className="card">
            <i className="fas fa-users"></i>
            <h3>O Que É Um Aumoxarifado? Como Funciona? Para Que Aerve?</h3>
            <p>O que é um ALMOXARIFADO? Você sabe quais são suas características?</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/sK3YWLLew18?si=YBvZeywlrgYiX1xl" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="card">
            <i className="fas fa-truck"></i>
            <h3>7 Dicas para Uma Boa Gestão de Aumoxarifado
            </h3>
            <p>Entenda os processos, as tarefas e os objetivos para uma boa gestão de Aumoxarifado!</p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/11S4u1DnUlk?si=9Xm4mbCU7uOlz1i3" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          <div className="card">
            <i className="fas fa-chart-line"></i>
            <h3>Estruturação do Aumoxarifado</h3>
            <p>
            Almoxarifado e Supply Chain: Um Guia Essencial para Gestão Eficiente de Estoques            </p>
            <br></br>
            <iframe width="210" height="210" src="https://www.youtube.com/embed/CBUfjwdPFD0?si=hdSIbNPedk02MfR2" title="YouTube video player"  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" ></iframe>
          </div>
          </div>
          <button onClick={handleVoltar}>Voltar</button>
        
      </section>
    </div>
  );
};

export default Almoxarifado;
