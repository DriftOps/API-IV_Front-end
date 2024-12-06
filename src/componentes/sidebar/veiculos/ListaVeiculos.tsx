import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaVeiculos.css';

const ListaVeiculos = () => {
  const navigate = useNavigate();
  const [veiculos, setVeiculos] = useState([]);

  useEffect(() => {
    // Recupera a lista de veículos armazenada no localStorage ou inicializa com os dados fictícios
    const veiculosFicticios = [
      { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020, placa: 'ABC-1234' },
      { id: 3, marca: 'Ford', modelo: 'Fiesta', ano: 2018, placa: 'QWE-9012' },
      { id: 4, marca: 'Chevrolet', modelo: 'Onix', ano: 2021, placa: 'DEF-3456' },
      { id: 5, marca: 'Volkswagen', modelo: 'Gol', ano: 2017, placa: 'GHI-7890' },
      { id: 6, marca: 'Nissan', modelo: 'Versa', ano: 2022, placa: 'JKL-2345' },
      { id: 7, marca: 'Renault', modelo: 'Kwid', ano: 2020, placa: 'MNO-6789' },
      { id: 8, marca: 'Hyundai', modelo: 'HB20', ano: 2019, placa: 'PQR-4567' },
      { id: 9, marca: 'Jeep', modelo: 'Renegade', ano: 2021, placa: 'STU-8901' },
      { id: 10, marca: 'Fiat', modelo: 'Argo', ano: 2022, placa: 'VWX-1234' },
      { id: 11, marca: 'Kia', modelo: 'Sportage', ano: 2020, placa: 'YZA-5678' },
      { id: 12, marca: 'Peugeot', modelo: '208', ano: 2021, placa: 'BCD-7890' },
      { id: 13, marca: 'Citroën', modelo: 'C3', ano: 2018, placa: 'EFG-1234' },
      { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2019, placa: 'XYZ-5678' }
    ];

    // Verifica se já existem veículos no localStorage, senão, usa os fictícios
    const veiculosSalvos = JSON.parse(localStorage.getItem('veiculos')) || veiculosFicticios;
    setVeiculos(veiculosSalvos);
  }, []);

  const handleEditar = (index) => {
    // Redireciona para a página de edição do veículo com base no índice
    navigate(`/veiculos/${index}`);
  };

  const handleExcluir = (index) => {
    // Remove o veículo do array usando o índice
    const veiculosAtualizados = veiculos.filter((_, i) => i !== index);

    // Atualiza o localStorage
    localStorage.setItem('veiculos', JSON.stringify(veiculosAtualizados));

    // Atualiza o estado local para refletir a exclusão
    setVeiculos(veiculosAtualizados);
  };

  const handleAdicionarNovo = () => {
    // Redireciona para a página de adição de um novo veículo
    navigate(`/veiculos/novo`);
  };

  return (
    <div className="lista-veiculos-container">
      <div className="header-lista">
        <h2>Lista de Veículos</h2>
        <button className="btn-novo" onClick={handleAdicionarNovo}>+ Novo</button>
      </div>
      
      <table className="veiculos-table">
        <thead>
          <tr>
            <th>Marca</th>
            <th>Modelo</th>
            <th>Ano</th>
            <th>Placa</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {veiculos.map((veiculo, index) => (
            <tr key={index}>
              <td>{veiculo.marca}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.placa}</td>
              <td>
                <button onClick={() => handleEditar(index)}>Editar</button>
                <button onClick={() => handleExcluir(index)}>Excluir</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaVeiculos;
