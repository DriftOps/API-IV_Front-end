import React, { useState } from 'react';
import './AdicionarVeiculo.css';
import { useNavigate } from 'react-router-dom';

const AdicionarVeiculo = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const navigate = useNavigate();

  const handleSalvar = () => {
    // Simula o salvamento do veículo
    console.log({ marca, modelo, ano, placa });
    
    // Redireciona de volta para a lista de veículos
    navigate('/veiculos');
  };

  return (
    <div className="form-adicionar-container">
      <h2>Adicionar Veículo</h2>
      <form>
        <div className="form-group">
          <label>Marca:</label>
          <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Ano:</label>
          <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
        </div>
        <div className="form-group">
          <label>Placa:</label>
          <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
        </div>
        <button type="button" onClick={handleSalvar}>Salvar</button>
      </form>
    </div>
  );
};

export default AdicionarVeiculo;