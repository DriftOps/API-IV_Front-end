import React, { useState } from 'react';
import './CadastroPopup.css';

interface CadastroPopupProps {
  onClose: () => void;
}

const CadastroPopup: React.FC<CadastroPopupProps> = ({ onClose }) => {
  const [processType, setProcessType] = useState('Operacional');
  const [processInfo, setProcessInfo] = useState({
    status: '',
    location: '',
    details: '',
    responsavel: '',
    outrasInformacoes: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProcessInfo({ ...processInfo, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aqui você pode enviar os dados para o backend (MySQL) no futuro
    console.log('Cadastro realizado:', processInfo);
    onClose();
  };

  return (
    <div className="popup-overlay">
      <div className="popup-content">
        <h2>Cadastrar Novo Processo</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="processType">Tipo de Processo</label>
          <select
            id="processType"
            value={processType}
            onChange={(e) => setProcessType(e.target.value)}
          >
            <option value="Operacional">Operacional</option>
            <option value="Comercial">Comercial</option>
            <option value="Financeiro">Financeiro</option>
          </select>

          <label htmlFor="status">Status</label>
          <input
            type="text"
            id="status"
            name="status"
            value={processInfo.status}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="location">Localização</label>
          <input
            type="text"
            id="location"
            name="location"
            value={processInfo.location}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="details">Detalhes</label>
          <textarea
            id="details"
            name="details"
            value={processInfo.details}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="responsavel">Responsável</label>
          <input
            type="text"
            id="responsavel"
            name="responsavel"
            value={processInfo.responsavel}
            onChange={handleInputChange}
            required
          />

          <label htmlFor="outrasInformacoes">Outras Informações</label>
          <textarea
            id="outrasInformacoes"
            name="outrasInformacoes"
            value={processInfo.outrasInformacoes}
            onChange={handleInputChange}
          />

          <button type="submit" className="submit-button">Cadastrar</button>
          <button type="button" onClick={onClose} className="cancel-button">Cancelar</button>
        </form>
      </div>
    </div>
  );
};

export default CadastroPopup;
