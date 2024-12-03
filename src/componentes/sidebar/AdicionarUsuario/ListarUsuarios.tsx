import React from 'react';
import './ListarUsuarios.css';
import { useFuncionario } from './FuncionarioContext'; 

const ListarUsuarios: React.FC = () => {
  const { funcionarios } = useFuncionario();

  return (
    <div>
      <h2>Lista de Funcionários</h2>
      {funcionarios.length > 0 ? (
        <table className="tabela-funcionarios">
          <thead>
            <tr>
              <th>ID</th>
              <th>Nome</th>
              <th>CPF</th>
              <th>Setor</th>
              <th>Data de Nascimento</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {funcionarios.map((funcionario) => (
              <tr key={funcionario.id}>
                <td>{funcionario.id}</td>
                <td>{funcionario.nome}</td>
                <td>{funcionario.cpf}</td>
                <td>{funcionario.setor}</td>
                <td>{funcionario.dataNascimento}</td>
                <td>{funcionario.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>Nenhum funcionário cadastrado.</p>
      )}
    </div>
  );
};

export default ListarUsuarios;
