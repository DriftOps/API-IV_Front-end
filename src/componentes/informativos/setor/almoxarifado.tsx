import React from 'react';
import './almoxarifado.css';

const Almoxarifado: React.FC = () => {
  return (
    <div className="warehouse-container">
      <header className="header">
        <h1>Setor de Almoxarifado - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <ul className="info-list">
          <li>Inventário: O próximo inventário será realizado nos dias 10 e 11 de novembro.</li>
          <li>Recebimento de materiais: Novas entregas de materiais estão programadas para o dia 15 de outubro.</li>
          <li>Organização: Pedimos que todos os colaboradores mantenham as áreas organizadas e limpas.</li>
          <li>Reabastecimento: Verifiquem os estoques e solicitem reabastecimento até o dia 20 de outubro.</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2024 JJM LOG. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Almoxarifado;
