import React, { useState } from 'react';
import './AdicionarVeiculo.css';
import { useNavigate } from 'react-router-dom';

const AdicionarVeiculo = () => {
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [ano, setAno] = useState('');
  const [placa, setPlaca] = useState('');
  const [checklist, setChecklist] = useState([
    { id: 'pneus', label: 'Estado dos pneus', status: '' },
    { id: 'motor', label: 'Situação do motor', status: '' },
    { id: 'farois', label: 'Funcionamento dos faróis', status: '' },
    { id: 'freios', label: 'Condição dos freios', status: '' },
    { id: 'manutenção', label: 'Kit de manutenção', status: '' },
    { id: 'limpeza', label: 'Condição geral de limpeza', status: '' },
  ]);
  const navigate = useNavigate();

  const handleStatusChange = (id: string, status: 'aprovado' | 'recusado') => {
    setChecklist((prevChecklist) =>
      prevChecklist.map((item) =>
        item.id === id ? { ...item, status } : item
      )
    );
  };

  const handleSalvar = () => {
    // Simula o salvamento do veículo e checklist
    console.log({
      veiculo: { marca, modelo, ano, placa },
      checklist,
    });

    // Redireciona de volta para a lista de veículos
    navigate('/veiculos');
  };

  const handleVoltar = () => {
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

        <h3>Checklist de Veículo</h3>
<div className="checklist-container">
  {checklist.map((item) => (
    <div key={item.id} className="checklist-item">
      <label>{item.label}</label>
      <div className="radio-group">
        <label>
          <input
            type="radio"
            name={item.id}
            value="aprovado"
            checked={item.status === 'aprovado'}
            onChange={() => handleStatusChange(item.id, 'aprovado')}
          />
          Aprovado
        </label>
        <label>
          <input
            type="radio"
            name={item.id}
            value="recusado"
            checked={item.status === 'recusado'}
            onChange={() => handleStatusChange(item.id, 'recusado')}
          />
          Recusado
        </label>
      </div>
    </div>
  ))}
</div>


        <button type="button" onClick={handleSalvar}>Salvar</button>

        <button type="button" onClick={handleVoltar} className="btn-voltar">
          <img src="/img/voltar.png" alt="Voltar" />
        </button>
      </form>
    </div>
  );
};

export default AdicionarVeiculo;
