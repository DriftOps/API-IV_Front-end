import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import Sidebar from '../sidebar/sidebar';

const Header: React.FC = () => {
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
  };

  return (
    <header>
      <Sidebar/>
      <div>
        <img className="img" src='/img/jjm-log_logo_mini.png' width={160} />
        <div className="navbar">
          <div className="nav-items">
            <div className="back-button">
              <button className="menu-button" onClick={toggleSidebar}>
                <i className="bx bx-menu"></i>
              </button>
            </div>
            <span className="nav-item">
              <Link to="/tarefas" className='nav-item'>Tarefas</Link>
            </span>
            <span className="nav-item">
              <Link to="/perfil" className='nav-item'>Perfil</Link>
            </span>
            <span className="nav-item">
              <Link to="/informativos" className='nav-item'>Informativos</Link>
            </span>
            <span className="nav-item">
              <Link to="/processos" className='nav-item'>Processos</Link>
            </span>
            <span className="nav-item">
              <Link to="/historico" className='nav-item'>Histórico</Link>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
