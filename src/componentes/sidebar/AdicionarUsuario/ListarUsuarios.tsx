import React from 'react';
import { useFuncionario } from './FuncionarioContext';
import { useNavigate } from 'react-router-dom';
import './ListarUsuarios.css';

const ListarUsuarios: React.FC = () => {
  const { funcionarios, deleteFuncionario } = useFuncionario();
  const navigate = useNavigate();

  const handleEdit = (id: string) => {
    navigate(`/editar/${id}`); // Redireciona para a página de edição
  };

  const handleDelete = (id: string) => {
    deleteFuncionario(id); // Deleta o funcionário
    alert('Funcionário excluído com sucesso!');
  };

  return (
    <div className="listar-usuarios-container">
      <h2 className="titulo">Lista de Funcionários</h2>
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
              <th>Ações</th>
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
                <td>
                  <button className="botao-editar" onClick={() => handleEdit(funcionario.id)}>Editar</button>
                  <button className="botao-excluir" onClick={() => handleDelete(funcionario.id)}>Excluir</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p className="nenhum-funcionario">Nenhum funcionário cadastrado.</p>
      )}
    </div>
  );
};

export default ListarUsuarios;
