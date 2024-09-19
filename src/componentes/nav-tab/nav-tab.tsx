
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
            <span>&larr;</span>
          </div>
        <span  className="nav-item">Processos</span>
        <span className="nav-item ">Historico</span>
      </div>
    </div>
      </div>

      
      
      
    </header>
  );
};

export default Header;
