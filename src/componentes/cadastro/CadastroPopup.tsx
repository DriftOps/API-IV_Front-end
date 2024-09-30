import React, { useState } from 'react';
import './CadastroPopup.css';

interface CadastroPopupProps {
  onClose: () => void;
  addProcesso: (processo: { id: string; events: { status: string; sector: string; location: string; date: string; details: string; responsavel: string; outrasInformacoes: string; }[] }) => void;
}

const CadastroPopup: React.FC<CadastroPopupProps> = ({ onClose, addProcesso }) => {
  const [processType, setProcessType] = useState('Operacional');
  const [processStatus, setProcessStatus] = useState('Em preparação');
  const [processInfo, setProcessInfo] = useState({
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

    const formattedDate = new Date().toLocaleString('pt-BR', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
    });

    const newProcesso = {
      id: Date.now().toString(),
      events: [
        {
          status: processStatus,
          sector: processType,
          location: processInfo.location,
          date: formattedDate,
          details: processInfo.details,
          responsavel: processInfo.responsavel,
          outrasInformacoes: processInfo.outrasInformacoes,
        },
      ],
    };
    addProcesso(newProcesso);
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
            required
          >
            <option value="Operacional">Operacional</option>
            <option value="Comercial">Comercial</option>
            <option value="Financeiro">Financeiro</option>
          </select>

          <label htmlFor="status">Status</label>
          <select
            id="processStatus"
            value={processStatus}
            onChange={(e) => setProcessStatus(e.target.value)}
            required
          >
            <option value="Em preparação">Em preparação</option>
            <option value="Enviado">Enviado</option>
            <option value="Finalizado">Finalizado</option>
          </select>

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

          <div className="button-group">
            <button type="submit" className="submit-button">Cadastrar</button>
            <button type="button" onClick={onClose} className="cancel-button">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CadastroPopup;
