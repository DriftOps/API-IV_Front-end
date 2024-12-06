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
    // Criar o objeto do veículo
    const novoVeiculo = { marca, modelo, ano, placa };

    // Recuperar veículos armazenados no localStorage ou inicializar com os veículos fictícios
    const veiculosFicticios = [
      { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020, placa: 'ABC-1234' },
      { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2019, placa: 'XYZ-5678' },
      { id: 3, marca: 'Ford', modelo: 'Fiesta', ano: 2018, placa: 'QWE-9012' }
    ];

    const veiculos = JSON.parse(localStorage.getItem('veiculos')) || veiculosFicticios;

    // Adicionar o novo veículo à lista
    veiculos.push(novoVeiculo);

    // Salvar a lista atualizada no localStorage
    localStorage.setItem('veiculos', JSON.stringify(veiculos));

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
          <div className="input-container">
            <input type="text" value={marca} onChange={(e) => setMarca(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Modelo:</label>
          <div className="input-container">
            <input type="text" value={modelo} onChange={(e) => setModelo(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Ano:</label>
          <div className="input-container">
            <input type="number" value={ano} onChange={(e) => setAno(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>Placa:</label>
          <div className="input-container">
            <input type="text" value={placa} onChange={(e) => setPlaca(e.target.value)} />
          </div>
        </div>

        <div className="buttons-container">
          <button type="button" onClick={handleSalvar} className="btn-salvar">Salvar</button>
          <button type="button" onClick={handleVoltar} className="btn-voltar">
            <img src="/img/voltar.png" alt="Voltar" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default AdicionarVeiculo;
