import React from 'react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  return (
    <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'black', padding: '10px' }}>
      <h1 style={{ color: 'white' }}>JJM</h1>
      <nav>
        <Link to="/login" style={{ color: 'white', marginRight: '20px' }}>Login</Link>
        <Link to="/processos" style={{ color: 'white' }}>Processos</Link>
      </nav>
    </header>
  );
};

export default Header;
