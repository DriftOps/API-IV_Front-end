import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './AdicionarUsuario.css';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  setor: string;
  dataNascimento: string;
  email: string;
}

interface AdicionarUsuarioProps {
  onAdd: (funcionario: Funcionario) => void;
  onDelete: (id: string) => void;
  onList: () => void; // Função para listar os funcionários cadastrados
}

const AdicionarUsuario: React.FC<AdicionarUsuarioProps> = ({ onAdd, onDelete, onList }) => {
  const [formData, setFormData] = useState<Funcionario>({
    id: Math.random().toString(36).substring(2, 9).toUpperCase(),
    nome: '',
    cpf: '',
    setor: '',
    dataNascimento: '',
    email: '',
  });

  const [ultimoFuncionario, setUltimoFuncionario] = useState<Funcionario | null>(null);

  const emailDomains = ['gmail.com', 'hotmail.com', 'yahoo.com', 'outlook.com'];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEmailDomainChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const domain = e.target.value;
    setFormData((prev) => ({ ...prev, email: prev.email.split('@')[0] + '@' + domain }));
  };

  const handleAddFuncionario = (e: React.FormEvent) => {
    e.preventDefault();

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      alert('Por favor, insira um e-mail válido.');
      return;
    }

    setUltimoFuncionario(formData);
    onAdd(formData);

    alert('Funcionário adicionado com sucesso!');

    setFormData({
      id: Math.random().toString(36).substring(2, 9).toUpperCase(),
      nome: '',
      cpf: '',
      setor: '',
      dataNascimento: '',
      email: '',
    });
  };

  const handleDeleteFuncionario = (id: string) => {
    if (window.confirm('Tem certeza que deseja deletar este funcionário?')) {
      onDelete(id);
      alert('Funcionário deletado com sucesso!');
    }
  };

  const handleEnviarEmail = () => {
    console.log('Email de redefinição de senha enviado para:', formData.email);
  };

  return (
    <div className="adicionar-usuario-container">
      <h2 className="title">Adicionar Funcionário</h2>
      <form className="adicionar-usuario-form" onSubmit={handleAddFuncionario}>
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
            name="setor"
            value={formData.setor}
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
          <div className="email-mask">
            <input
              type="text"
              name="email"
              value={formData.email.split('@')[0]} // Parte antes do @
              onChange={(e) => setFormData({ ...formData, email: e.target.value + '@' + formData.email.split('@')[1] })}
              placeholder="exemplo"
              required
            />
            <span>@</span>
            <input
              type="text"
              name="email"
              value={formData.email.split('@')[1] || ''} // Parte após o @
              onChange={(e) => setFormData({ ...formData, email: formData.email.split('@')[0] + '@' + e.target.value })}
              placeholder="gmail.com"
              required
            />
            <select value={formData.email.split('@')[1] || ''} onChange={handleEmailDomainChange}>
              <option value="">Selecione o domínio</option>
              {emailDomains.map((domain) => (
                <option key={domain} value={domain}>{domain}</option>
              ))}
            </select>
          </div>
        </div>

        <div className="button-group">
          <button type="submit" className="add-user-button">
            Adicionar Funcionário
          </button>
          <button type="button" className="enviar-email" onClick={handleEnviarEmail}>
            Enviar Email de Redefinição de Senha
          </button>
          <button type="button" className="ListarFuncionarios" onClick={onList}>
            Listar Funcionários Cadastrados
          </button>
          <button type="button" className="deletar-usuario" onClick={() => handleDeleteFuncionario(formData.id)}>
            Deletar Funcionário
          </button>
        </div>
      </form>

      {ultimoFuncionario && (
        <div className="ultimo-funcionario">
          <h3>Último Funcionário Adicionado</h3>
          <p>
            <strong>{ultimoFuncionario.nome}</strong> - {ultimoFuncionario.setor} -{' '}
            {ultimoFuncionario.email}
          </p>
        </div>
      )}
    </div>
  );
};

export default AdicionarUsuario;
