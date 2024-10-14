import React from 'react';
import { Link } from 'react-router-dom';
import './informativos.css';

const Informativo: React.FC = () => {
  const setores = [
    {
      nome: 'Operacional',
      path: '/informativos/setor/operacional',
      descricao: 'Responsável por gerenciar a produção e operações diárias.',
    },
    {
      nome: 'Recursos Humanos',
      path: '/informativos/setor/recursos-humanos',
      descricao: 'Gerencia recrutamento, treinamento e bem-estar dos funcionários.',
    },
    {
      nome: 'Financeiro',
      path: '/informativos/setor/financeiro',
      descricao: 'Controla o fluxo de caixa, orçamento e estratégias financeiras.',
    },
    {
      nome: 'Almoxarifado',
      path: '/informativos/setor/almoxarifado',
      descricao: 'Gerencia o estoque e a distribuição de materiais e suprimentos.',
    },
  ];

  return (
    <div className="informativo-container">
      {setores.map((setor) => (
        <Link to={setor.path} key={setor.nome} className="setor-card">
          <div className="card-content">
            <h3>{setor.nome}</h3>
            <p>{setor.descricao}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default Informativo;