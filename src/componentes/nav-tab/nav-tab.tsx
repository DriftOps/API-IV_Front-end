
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css'; // Estilos separados em CSS


const Header: React.FC = () => {
  return (
    <header style={{}}>

    <div>
     
         
          <img className="img" src='/img/jjm-log_logo_mini.png' width={160}></img>
      
      <div className="navbar">
      <div className="nav-items">
      <div className="back-button">
      <span>
        <Link to="/nav-tab-perfil" className='back-button'>  &larr;</Link>
        </span>
          </div>
          <span  className="nav-item">
          <Link to="/tarefas" className='nav-item'>Tarefas</Link>
          </span>
        <span className="nav-item ">
        <Link to="/perfil" className='nav-item'>Perfil</Link>
          </span>
          <span className="nav-item ">
        <Link to="/informativos" className='nav-item'>Informativos</Link>
          </span>
          <span className="nav-item ">
        <Link to="/processos" className='nav-item'>Processos</Link>
          </span>
        <span className="nav-item ">
        <Link to="/historico" className='nav-item'>Histórico</Link>
          </span>
      </div>
    </div>
      </div>

      
      
      
    </header>
  );
};

export default Header;
