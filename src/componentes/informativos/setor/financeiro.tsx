import React from 'react';
import './financeiro.css';

const Financeiro: React.FC = () => {
  return (
    <div className="finance-container">
      <header className="header">
        <h1>Setor Financeiro - JJM LOG</h1>
      </header>
      <section className="info-section">
        <h2>Informativos</h2>
        <ul className="info-list">
          <li>Relatório mensal: O relatório financeiro de setembro estará disponível até o dia 5 de outubro.</li>
          <li>Pagamentos: Todos os fornecedores devem enviar faturas até o dia 15 de outubro.</li>
          <li>Reunião: A próxima reunião de planejamento financeiro será no dia 28 de outubro, às 9h.</li>
          <li>Orçamento: Lembrete para todos os departamentos: as propostas de orçamento devem ser entregues até o final do mês.</li>
        </ul>
      </section>
      <footer className="footer">
        <p>&copy; 2024 JJM LOG. Todos os direitos reservados.</p>
      </footer>
    </div>
  );
};

export default Financeiro;
