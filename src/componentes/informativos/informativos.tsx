import React from 'react';
import { Link } from 'react-router-dom';
import './informativos.css';

const Informativo: React.FC = () => {
  const setores = [
    { nome: 'Operacional', path: './setor/operacional' },
    { nome: 'Recursos Humanos', path: './setor/recursos-humanos' },
    { nome: 'Financeiro', path: './setor/financeiro' },
    { nome: 'Almoxarifado', path: './setor/almoxarifado' },
  ];

  return (
    <div className="informativo-container">
      {setores.map((setor) => (
        <Link to={setor.path} key={setor.nome} className="setor-botao">
          {setor.nome}
        </Link>
      ))}
    </div>
  );
};

export default Informativo;