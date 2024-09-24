
import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Sidebar from '../sidebar/sidebar';


const Header: React.FC = () => {
  return (
    <header>
    <div>         
          <img className="img" src='/img/jjm-log_logo_mini.png' width={160}></img>
      
      <div className="navbar">
      <div className="nav-items">
      <div className="back-button">
      <span>
        <Sidebar/>
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
