import React from 'react';
import { Link } from 'react-router-dom';
import './informativos.css';

const Informativo: React.FC = () => {
  const setores = [
    {
      nome: 'Comercial',
      path: '/informativos/setor/comercial',
      descricao: 'Estratégia de vendas, negociações e relacionamento com clientes.',
      imagem: `${process.env.PUBLIC_URL}/img/comercial.png`,
    },
    {
      nome: 'Almoxarifado',
      path: '/informativos/setor/almoxarifado',
      descricao: 'Gerencia o estoque e a distribuição de materiais e suprimentos.',
      imagem: `${process.env.PUBLIC_URL}/img/almoxarifado.png`,
    },
    {
      nome: 'Operacional',
      path: '/informativos/setor/operacional',
      descricao: 'Responsável por gerenciar a produção e operações diárias.',
      imagem: `${process.env.PUBLIC_URL}/img/operacional.png`,
    },
    {
      nome: 'Financeiro',
      path: '/informativos/setor/financeiro',
      descricao: 'Controla o fluxo de caixa, orçamento e estratégias financeiras.',
      imagem: `${process.env.PUBLIC_URL}/img/financeiro.png`,
    },
    {
      nome: 'Recursos Humanos',
      path: '/informativos/setor/recursos-humanos',
      descricao: 'Gerencia recrutamento, treinamento e bem-estar dos funcionários.',
      imagem: `${process.env.PUBLIC_URL}/img/RH.png`,
    },
  ];

  return (
    <div className="informativo-container">
      {setores.map((setor) => (
        <Link to={setor.path} key={setor.nome} className="setor-card">
          <div className="card-content">
            <img src={setor.imagem} alt={`${setor.nome} icon`} className="setor-image" />
            <h3>{setor.nome}</h3>
            <p>{setor.descricao}</p>
          </div>
        </Link>
      ))}

    </div>
  );
};

export default Informativo;