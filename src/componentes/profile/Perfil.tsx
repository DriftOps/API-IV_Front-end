import React, { Component } from 'react';
import './Perfil.css';
import userphoto from '../img/user.png';
import './importation.css'

interface ProfileState {
  isEditing: boolean;
  name: string;
  cpf: string;
  rg: string;
  setor: string;
  isModalOpen: boolean;
  selectedFile: File | null; // Adicionado para armazenar o arquivo selecionado
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
      isModalOpen: false,
      selectedFile: null, // Inicializa como null
    };
  }

  toggleEdit = () => {
    this.setState({ isEditing: !this.state.isEditing });
  };

  openModal = () => {
    this.setState({ isModalOpen: true });
  };

  closeModal = () => {
    this.setState({ isModalOpen: false, selectedFile: null }); // Reseta o arquivo ao fechar
  };

  handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    this.setState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  handleFileSelect = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files; // Obtém os arquivos selecionados
    if (files && files.length > 0) {
      this.setState({ selectedFile: files[0] }); // Atualiza o estado com o arquivo selecionado
      console.log('Arquivo selecionado:', files[0]); // Faz algo com o arquivo selecionado
    }
  };

  render() {
    const { isEditing, name, cpf, rg, setor, isModalOpen, selectedFile } = this.state;

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

        {/* Botão para abrir o modal */}
        <button onClick={this.openModal}>Enviar Documento</button>

        {/* Modal */}
        {isModalOpen && (
  <div className="modal-overlay">
    <div className="modal">
      <h2>Enviar Documento</h2>
      <p>Selecione o arquivo desejado</p>

      {/* Exibir o nome do arquivo selecionado, se houver */}
      {selectedFile && <p>Arquivo Selecionado: {selectedFile.name}</p>}

      {/* Div para organizar os botões */}
      <div className="modal-buttons">
        <button className='modal-btn' onClick={this.closeModal}>Fechar</button>

        <input
          type="file"
          id="file-input"
          style={{ display: 'none' }}
          onChange={this.handleFileSelect}
        />
        <button className='explorer-button' onClick={() => document.getElementById('file-input')?.click()}>
          Selecionar arquivo
        </button>

        <button 
          className="upload-button" 
          onClick={() => { 
            if (selectedFile) {
              console.log('Iniciar upload do arquivo:', selectedFile.name); 
              // Adicione aqui a lógica de upload
            } else {
              alert('Por favor, selecione um arquivo antes de fazer o upload.');
            }
          }}
        >
          Upload
        </button>
      </div>
    </div>
  </div>
)}


      </div>
    );
  }
}
