import React, { useState } from 'react';
import InputMask from 'react-input-mask';
import './AdicionarUsuario.css';

const AdicionarUsuario = () => {
  const [formData, setFormData] = useState({
    id: '123',
    nome: '',
    cpf: '',
    tipoUsuario: '',
    dataNascimento: '',
    email: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleEnviarEmail = () => {
    // Lógica para enviar e-mail de redefinição de senha
    console.log("Email de redefinição de senha enviado para:", formData.email);
  };

  const handleAddUser = (e) => {
    e.preventDefault();
    // Lógica para adicionar o usuário
    console.log("Novo usuário adicionado:", formData);
  };

  return (
    <div className="adicionar-usuario-container">
      <h2 className="title">Adicionar Usuário</h2>
      <form className="adicionar-usuario-form" onSubmit={handleAddUser}>
        <div className="form-group">
          <label>ID</label>
          <input type="text" value={formData.id} disabled />
        </div>
        
        <div className="form-group">
          <label>Nome</label>
          <input 
            type="text" 
            name="nome" 
            value={formData.nome} 
            onChange={handleChange} 
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
          />
        </div>
        
        <div className="form-group">
          <label>Tipo de Usuário</label>
          <select name="tipoUsuario" value={formData.tipoUsuario} onChange={handleChange} required>
            <option value="">Selecione</option>
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
            required 
          />
        </div>
        
        <div className="button-group">
          <button type="submit" className="add-user-button">
            Adicionar Usuário
          </button>
          <button type="button" className="enviar-email" onClick={handleEnviarEmail}>
            Enviar Email de Redefinição de Senha
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdicionarUsuario;