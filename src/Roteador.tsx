import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
import Principal from './componentes/principal/principal';
import ListaVeiculos from './componentes/veiculos/ListaVeiculos';
import AdicionarVeiculo from './componentes/veiculos/AdicionarVeiculo';
import Veiculos from './componentes/veiculos/veiculos';
import Processos from './componentes/processos/Processos';
import NavTab from './componentes/nav-tab/nav-tab'
import Profile from './componentes/profile/Perfil';
import Informativos from './componentes/informativos/informativos';
import Almoxarifado from './componentes/informativos/setor/almoxarifado';
import Financeiro from './componentes/informativos/setor/financeiro';
import Operacional from './componentes/informativos/setor/operacional';
import RecursosHumanos from './componentes/informativos/setor/recursos-humanos';
import Footer from './componentes/footer/footer';

const Roteador: React.FC = () => {
  return (
    <Router>
      <NavTab /> {/* Navbar global visível em todas as rotas */}
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<Principal />} />
        <Route path="/veiculos" element={<ListaVeiculos />} />
        <Route path="/veiculos/:id" element={<Veiculos />} />
        <Route path="/veiculos/novo" element={<AdicionarVeiculo />} />
        <Route path="/processos" element={<Processos />} />
        <Route path="/perfil" element={<Profile />} />
        <Route path="/informativos" element={<Informativos />} />
        <Route path="/informativos/setor/almoxarifado" element={<Almoxarifado />} />
        <Route path="/informativos/setor/financeiro" element={<Financeiro />} />
        <Route path="/informativos/setor/operacional" element={<Operacional />} />
        <Route path="/informativos/setor/recursos-humanos" element={<RecursosHumanos />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default Roteador;
