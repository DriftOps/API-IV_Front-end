import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
import Processos from './componentes/Processos';
import NavTab from './componentes/nav-tab/nav-tab'
import Sidebar from './componentes/sidebar/sidebar';

const Roteador: React.FC = () => {
  return (
    <Router>
      <NavTab /> {/* Certifique-se de que o Header é exibido em todas as páginas */}    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processos" element={<Processos />} />
      </Routes>
    </Router>
  );
};

export default Roteador;
