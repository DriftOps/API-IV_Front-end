import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
// Sidebar
import Principal from './componentes/sidebar/principal/principal';
import ListaVeiculos from './componentes/sidebar/veiculos/ListaVeiculos';
import AdicionarVeiculo from './componentes/sidebar/veiculos/AdicionarVeiculo';
import Veiculos from './componentes/sidebar/veiculos/veiculos';

import AdicionarUsuario from './componentes/sidebar/AdicionarUsuario/AdicionarUsuario';
import Configuracao from './componentes/sidebar/Configuracao/Configuracao';
import Estatistica from './componentes/sidebar/Estatistica/Estatistica';

// Navbar
import NavTab from './componentes/nav-tab/nav-tab'
import Profile from './componentes/profile/Perfil';
import Informativos from './componentes/informativos/informativos';
import Almoxarifado from './componentes/informativos/setor/almoxarifado';
import Financeiro from './componentes/informativos/setor/financeiro';
import Operacional from './componentes/informativos/setor/operacional';
import RecursosHumanos from './componentes/informativos/setor/recursos-humanos';
import Processos from './componentes/processos/Processos';

// Rodapé
import Footer from './componentes/footer/footer';

const Roteador: React.FC = () => {
  return (
    <Router>
      <NavTab /> {/* Navbar global visível em todas as rotas */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/AdicionarUsuario" element={<AdicionarUsuario />} />
        <Route path="/veiculos" element={<ListaVeiculos />} />
        <Route path="/veiculos/:id" element={<Veiculos />} />
        <Route path="/veiculos/novo" element={<AdicionarVeiculo />} />
        <Route path="/Configuracao" element={<Configuracao />} />
        <Route path="/Estatistica" element={<Estatistica />} />
        <Route path="/processos" element={<Processos />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/informativos" element={<Informativos />} />
        <Route path="/informativos/setor/almoxarifado" element={<Almoxarifado />} />
        <Route path="/informativos/setor/financeiro" element={<Financeiro />} />
        <Route path="/informativos/setor/operacional" element={<Operacional />} />
        <Route path="/informativos/setor/recursos-humanos" element={<RecursosHumanos />} />
      </Routes>
      {/* <Footer /> */}
    </Router>
  );
};

export default Roteador;
