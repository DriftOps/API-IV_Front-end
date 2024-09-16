import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './Login';
import Processos from './Processos';
import Header from './Header'; // Importando o Header

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
