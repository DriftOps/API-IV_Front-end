import React from 'react';
import { useNavigate } from 'react-router-dom';
import './ListaVeiculos.css';

const ListaVeiculos = () => {
  const navigate = useNavigate();

  // Simulando uma lista de veículos
  const veiculos = [
    { id: 1, marca: 'Toyota', modelo: 'Corolla', ano: 2020, placa: 'ABC-1234' },
    { id: 2, marca: 'Honda', modelo: 'Civic', ano: 2019, placa: 'XYZ-5678' },
    { id: 3, marca: 'Ford', modelo: 'Fiesta', ano: 2018, placa: 'QWE-9012' }
  ];

  const handleEditar = (id: number) => {
    // Redireciona para a página de edição do veículo
    navigate(`/veiculos/${id}`);
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
          {veiculos.map(veiculo => (
            <tr key={veiculo.id}>
              <td>{veiculo.marca}</td>
              <td>{veiculo.modelo}</td>
              <td>{veiculo.ano}</td>
              <td>{veiculo.placa}</td>
              <td>
                <button onClick={() => handleEditar(veiculo.id)}>Editar</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ListaVeiculos;
