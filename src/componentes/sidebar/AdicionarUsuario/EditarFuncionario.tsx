import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useFuncionario } from './FuncionarioContext';
import './EditarFuncionario.css'; // Estilos compactados

const EditarFuncionario: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { funcionarios, updateFuncionario } = useFuncionario();
  const [funcionarioData, setFuncionarioData] = useState({
    nome: '',
    cpf: '',
    setor: 'Administrador',
    dataNascimento: '',
    email: '',
  });

  useEffect(() => {
    const index = funcionarios.findIndex(f => f.id === id);
    if (index !== -1) {
      const funcionario = funcionarios[index];
      setFuncionarioData({
        nome: funcionario.nome,
        cpf: funcionario.cpf,
        setor: funcionario.setor,
        dataNascimento: funcionario.dataNascimento,
        email: funcionario.email,
      });
    }
  }, [id, funcionarios]);

  const navigate = useNavigate();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFuncionarioData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const updatedFuncionario = { ...funcionarioData, id };
    updateFuncionario(id, updatedFuncionario);
    navigate('/listagem');
  };

  return (
    <div className="editar-funcionario-container">
      <h2 className="titulo">Editar Funcionário</h2>
      <form onSubmit={handleSubmit} className="formulario-editar">
        <div className="input-group">
          <label>Nome</label>
          <input
            type="text"
            name="nome"
            value={funcionarioData.nome}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>CPF</label>
          <input
            type="text"
            name="cpf"
            value={funcionarioData.cpf}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Setor</label>
          <input
            type="text"
            name="setor"
            value={funcionarioData.setor}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Data de Nascimento</label>
          <input
            type="date"
            name="dataNascimento"
            value={funcionarioData.dataNascimento}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={funcionarioData.email}
            onChange={handleInputChange}
            className="input"
          />
        </div>
        <button type="submit" className="botao-editar">Salvar</button>
      </form>
    </div>
  );
};

export default EditarFuncionario;
