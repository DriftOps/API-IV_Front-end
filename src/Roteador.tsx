import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
import Processos from './componentes/Processos';
import NavTab from './componentes/nav-tab/nav-tab'
import Sidebar from './componentes/sidebar/sidebar';
import NavTabPerfil from './componentes/nav-tab/nav-tab-perfil';

const Roteador: React.FC = () => {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processos" element={<><NavTab/> <Processos /> </>} />
        <Route path="/nav-tab-perfil" element={<NavTabPerfil />} />
      </Routes>
    </Router>
  );
};

export default Roteador;
