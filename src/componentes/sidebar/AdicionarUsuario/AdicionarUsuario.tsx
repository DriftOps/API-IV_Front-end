import React, { useState } from 'react';
import { useFuncionario } from './FuncionarioContext';
import { useNavigate } from 'react-router-dom';
import InputMask from 'react-input-mask';
import './AdicionarUsuario.css';

const AdicionarUsuario: React.FC = () => {
  const { addFuncionario } = useFuncionario();
  const [formData, setFormData] = useState({
    nome: '',
    cpf: '',
    setor: 'Administrador', // Valor padrão
    dataNascimento: '',
    email: '',
  });
  const navigate = useNavigate();

  // Função para gerar ID único
  const generateUniqueId = () => {
    return `ID-${Math.floor(Math.random() * 1000000)}`;
  };

  const handleAddFuncionario = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.cpf) {
      alert('Preencha todos os campos obrigatórios!');
      return;
    }

    const newFuncionario = {
      ...formData,
      id: generateUniqueId(),
    };

    addFuncionario(newFuncionario);
    alert('Funcionário adicionado com sucesso!');
    setFormData({ nome: '', cpf: '', setor: 'Administrador', dataNascimento: '', email: '' });
    navigate('/listagem'); // Redireciona para a lista de funcionários
  };

  return (
    <div className="adicionar-usuario-container">
      <h1 className="titulo">Adicionar Usuário</h1>
      <form onSubmit={handleAddFuncionario} className="formulario">
        <div className="input-group">
          <label>Nome:</label>
          <input
            type="text"
            value={formData.nome}
            onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>CPF:</label>
          <InputMask
            mask="999.999.999-99"
            value={formData.cpf}
            onChange={(e) => setFormData({ ...formData, cpf: e.target.value })}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Setor:</label>
          <select
            value={formData.setor}
            onChange={(e) => setFormData({ ...formData, setor: e.target.value })}
            className="input"
          >
            <option value="Administrador">Administrador</option>
            <option value="Operacional">Operacional</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Almoxarifado">Almoxarifado</option>
          </select>
        </div>
        <div className="input-group">
          <label>Data de Nascimento:</label>
          <input
            type="date"
            value={formData.dataNascimento}
            onChange={(e) => setFormData({ ...formData, dataNascimento: e.target.value })}
            className="input"
          />
        </div>
        <div className="input-group">
          <label>Email:</label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="input"
          />
        </div>
        <button type="submit" className="botao-adicionar">Adicionar Funcionário</button>
        <button type="button" className="botao-listar" onClick={() => navigate('/listagem')}>
          Listar Funcionários
        </button>
      </form>
    </div>
  );
};

export default AdicionarUsuario;
