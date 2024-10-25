import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import './veiculos.css';

const Veiculos = () => {
  const { id } = useParams<{ id: string }>(); // Pegando o ID da URL
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: ''
  });

  useEffect(() => {
    // Simulando uma busca de dados do veículo pelo ID (aqui você pode buscar do backend)
    const veiculosMock = [
      { id: '1', marca: 'Toyota', modelo: 'Corolla', ano: '2020', placa: 'ABC-1234' },
      { id: '2', marca: 'Honda', modelo: 'Civic', ano: '2019', placa: 'XYZ-5678' },
      { id: '3', marca: 'Ford', modelo: 'Fiesta', ano: '2018', placa: 'QWE-9012' }
    ];

    const veiculoSelecionado = veiculosMock.find(v => v.id === id);
    if (veiculoSelecionado) {
      setVeiculo(veiculoSelecionado);
    }
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Veículo editado:', veiculo);
    // Adicione a lógica para salvar os dados
  };

  const navigate = useNavigate();

  const handleVoltar = () => {
    navigate(-1);
  };


  return (
    <div className="veiculo-container">
      <div className="veiculo-form-wrapper">
        <h2>Editar Veículo</h2>
        <form onSubmit={handleSubmit} className="veiculo-form">
          <div>
            <label>Marca:</label>
            <input
              type="text"
              name="marca"
              value={veiculo.marca}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Modelo:</label>
            <input
              type="text"
              name="modelo"
              value={veiculo.modelo}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Ano:</label>
            <input
              type="text"
              name="ano"
              value={veiculo.ano}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label>Placa:</label>
            <input
              type="text"
              name="placa"
              value={veiculo.placa}
              onChange={handleChange}
              required
            />
          </div>
          <div className="button-container">
            <button type="submit">Salvar</button>
            <button onClick={handleVoltar}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Veiculos;