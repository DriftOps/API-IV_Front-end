import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './veiculos.css';

const Veiculos = () => {
  const { index } = useParams(); // Pegando o índice da URL
  const [veiculo, setVeiculo] = useState({
    marca: '',
    modelo: '',
    ano: '',
    placa: ''
  });

  const [veiculos, setVeiculos] = useState<any[]>([]); // Estado para armazenar os veículos

  const navigate = useNavigate();

  useEffect(() => {
    // Recupera os veículos armazenados no localStorage
    const veiculosSalvos = JSON.parse(localStorage.getItem('veiculos')) || [];
    setVeiculos(veiculosSalvos);

    // Converte o índice de string para número e encontra o veículo
    const veiculoSelecionado = veiculosSalvos[parseInt(index, 10)];
    if (veiculoSelecionado) {
      setVeiculo(veiculoSelecionado);
    }
  }, [index]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVeiculo({
      ...veiculo,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Atualiza o veículo na lista com base no índice
    const veiculosAtualizados = [...veiculos];
    veiculosAtualizados[parseInt(index, 10)] = { ...veiculo }; // Atualiza o veículo pelo índice

    // Atualiza no localStorage
    localStorage.setItem('veiculos', JSON.stringify(veiculosAtualizados));

    // Atualiza o estado local
    setVeiculos(veiculosAtualizados);

    // Redireciona de volta para a página de listagem de veículos
    navigate('/veiculos');  // Redireciona para a lista de veículos após salvar
  };

  const handleVoltar = () => {
    navigate('/veiculos'); // Caso o usuário clique no "Voltar", redireciona para a lista de veículos
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
            <button type="button" onClick={handleVoltar}>Voltar</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Veiculos;
