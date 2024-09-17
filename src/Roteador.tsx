import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/Login';
import Processos from './componentes/Processos';
import Header from './componentes/Header'; 
import Sidebar from './componentes/sidebar/sidebar';

const Roteador: React.FC = () => {
  return (
    <Router>
      <Header /> {/* Certifique-se de que o Header é exibido em todas as páginas */}    
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processos" element={<Processos />} />
      </Routes>
    </Router>
  );
};

export default Roteador;
