import React, { Component } from 'react';
import './Perfil.css';
import userphoto from '../img/user.png';

interface ProfileState {
  isEditing: boolean;
  name: string;
  cpf: string;
  rg: string;
  setor: string;
}

export default class Profile extends Component<{}, ProfileState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isEditing: false,
      name: 'João da Silva',
      cpf: '123.456.789-00',
      rg: '12.345.678-9',
      setor: 'Operacional',
    };
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  render() {
    const { isEditing, name, cpf, rg, setor } = this.state;

    return (
      <div className="profile">
        <img src={userphoto} alt="perfil" className="profile-pic" />
        
        <div className="input-group user-name-group">
          <strong>Nome de Usuário:</strong>
          {isEditing ? (
            <input
              type="text"
              name="name"
              value={name}
              onChange={this.handleChange}
              className="input-field user-name-input"
            />
          ) : (
            <h2 className="profile-name">{name}</h2>
          )}
        </div>

        <p className="profile-id">ID: 123456</p>

        <div className="profile-info">
          <div className="input-group">
            <strong>CPF:</strong>
            {isEditing ? (
              <input
                type="text"
                name="cpf"
                value={cpf}
                onChange={this.handleChange}
                className="input-field"
              />
            ) : (
              <span>{cpf}</span>
            )}
          </div>
          <div className="input-group">
            <strong>RG:</strong>
            {isEditing ? (
              <input
                type="text"
                name="rg"
                value={rg}
                onChange={this.handleChange}
                className="input-field"
              />
            ) : (
              <span>{rg}</span>
            )}
          </div>
          <div className="input-group">
            <strong>Setor:</strong>
            {isEditing ? (
              <select
                name="setor"
                value={setor}
                onChange={this.handleChange}
                className="input-field"
              >
                <option value="Operacional">Operacional</option>
                <option value="Recursos Humanos">Recursos Humanos</option>
                <option value="Financeiro">Financeiro</option>
                <option value="Almoxarifado">Almoxarifado</option>
              </select>
            ) : (
              <span>{setor}</span>
            )}
          </div>
        </div>

        <button onClick={this.toggleEdit}>
          {isEditing ? 'Salvar' : 'Editar'}
        </button>
      </div>
    );
  }
}