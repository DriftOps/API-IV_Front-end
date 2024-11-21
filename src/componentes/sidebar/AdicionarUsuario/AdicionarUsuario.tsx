import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './AdicionarUsuario.css';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  tipoUsuario: string;
  dataNascimento: string;
  email: string;
}

interface AdicionarUsuarioProps {
  onAdd: (funcionario: Funcionario) => void;
}

const AdicionarUsuario: React.FC<AdicionarUsuarioProps> = ({ onAdd }) => {
  const [formData, setFormData] = useState<Funcionario>({
    id: Math.random().toString(36).substring(2, 9).toUpperCase(),
    nome: '',
    cpf: '',
    tipoUsuario: '',
    dataNascimento: '',
    email: '',
  });

  const [ultimoFuncionario, setUltimoFuncionario] = useState<Funcionario | null>(null);

  const handleEnviarEmail = () => {
    console.log('Email de redefinição de senha enviado para:', formData.email);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleAddUser = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um email válido.');
      return;
    }

    setUltimoFuncionario(formData);
    onAdd(formData);

    alert('Funcionário adicionado com sucesso!');

    setFormData({
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      nome: '',
      cpf: '',
      tipoUsuario: '',
      dataNascimento: '',
      email: '',
    });
  };

  return (
    <div className="adicionar-usuario-container">
      <h2 className="title">Adicionar Funcionário</h2>
      <form className="adicionar-usuario-form" onSubmit={handleAddUser}>
        <div className="form-group">
          <label>ID</label>
          <input type="text" value={formData.id} disabled />
        </div>

        <div className="form-group">
          <label>Nome Completo</label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            placeholder="Ex: João Silva"
            required
          />
        </div>

        <div className="form-group">
          <label>CPF</label>
          <InputMask
            mask="999.999.999-99"
            name="cpf"
            value={formData.cpf}
            onChange={handleChange}
            required
            placeholder="000.000.000-00"
          />
        </div>

        <div className="form-group">
          <label>Setor</label>
          <select
            name="tipoUsuario"
            value={formData.tipoUsuario}
            onChange={handleChange}
            required
          >
            <option value="">Selecione o setor</option>
            <option value="Administrador">Administrador</option>
            <option value="Operacional">Operacional</option>
            <option value="Financeiro">Financeiro</option>
            <option value="Recursos Humanos">Recursos Humanos</option>
            <option value="Almoxarifado">Almoxarifado</option>
          </select>
        </div>

        <div className="form-group">
          <label>Data de Nascimento</label>
          <input
            type="date"
            name="dataNascimento"
            value={formData.dataNascimento}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Ex: exemplo@empresa.com"
            required
          />
        </div>

        <div className="button-group">
          <button type="submit" className="add-user-button">
            Adicionar Funcionário
          </button>
          <button type="button" className="enviar-email" onClick={handleEnviarEmail}>
            Enviar Email de Redefinição de Senha
          </button>
          <button type="button" className="ListarUsuarios">
          Listar Usuarios Cadastrados
          </button>
        </div>
      </form>

      {ultimoFuncionario && (
        <div className="ultimo-funcionario">
          <h3>Último Funcionário Adicionado</h3>
          <p>
            <strong>{ultimoFuncionario.nome}</strong> - {ultimoFuncionario.tipoUsuario} -{' '}
            {ultimoFuncionario.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdicionarUsuario;
