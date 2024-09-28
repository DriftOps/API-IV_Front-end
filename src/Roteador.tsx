import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
import Processos from './componentes/processos/Processos';
import NavTab from './componentes/nav-tab/nav-tab'
import NavTabPerfil from './componentes/nav-tab/nav-tab-perfil';
import Profile from './componentes/profile/Perfil';

const Roteador: React.FC = () => {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processos" element={<><NavTab/> <Processos /> </>} />
        <Route path="/perfil" element={<><NavTabPerfil /> <Profile /> </>} />
      </Routes>
    </Router>
  );
};

export default Roteador;
