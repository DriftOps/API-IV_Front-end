import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Login from './componentes/login/Login';
import Processos from './componentes/processos/Processos';
import NavTab from './componentes/nav-tab/nav-tab'
import NavTabPerfil from './componentes/nav-tab/nav-tab-perfil';
import Profile from './componentes/profile/Perfil';
import Informativos from './componentes/informativos/informativos';
import Almoxarifado from './componentes/informativos/setor/almoxarifado';
import Financeiro from './componentes/informativos/setor/almoxarifado';
import Operacional from './componentes/informativos/setor/almoxarifado';
import Recursos_Humanos from './componentes/informativos/setor/almoxarifado';

const Roteador: React.FC = () => {
  return (
    <Router>   
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/processos" element={<><NavTab/> <Processos /> </>} />
        <Route path="/perfil" element={<><NavTabPerfil /> <Profile /> </>} />
        <Route path="/informativos" element={<><NavTab/> <Informativos /> </>} />
        <Route path="/informativos/setor/almoxarifado" element={<Almoxarifado />} />
        <Route path="/informativos/setor/financeiro" element={<Financeiro />} />
        <Route path="/informativos/setor/operacional" element={<Operacional />} />
        <Route path="/informativos/setor/recursos-humanos" element={<Recursos_Humanos />} />
      </Routes>
    </Router>
  );
};

export default Roteador;
