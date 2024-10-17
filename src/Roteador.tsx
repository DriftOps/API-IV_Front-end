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
import Almoxarifado from './componentes/informativos/setores/almoxarifado';
import Financeiro from './componentes/informativos/setores/financeiro';
import Operacional from './componentes/informativos/setores/operacional';
import RecursosHumanos from './componentes/informativos/setores/recursos-humanos';
import Processos from './componentes/processos/Processos';
import Tarefas from './componentes/tarefas/tarefas';

// Rodapé
import Footer from './componentes/footer/Footer';

const Roteador: React.FC = () => {
  return (
    <Router>
      
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<><NavTab/> <Principal /> </>} />
        <Route path="/AdicionarUsuario" element={<><NavTab/> <AdicionarUsuario /> </>} />
        <Route path="/veiculos" element={<><NavTab/> <ListaVeiculos /> </>} />
        <Route path="/veiculos/:id" element={<><NavTab/> <Veiculos /> </>} />  <Route path="/veiculos/novo" element={<><NavTab/> <AdicionarVeiculo /> </>} />
        <Route path="/Configuracao" element={<><NavTab/> <Configuracao /> </>} />
        <Route path="/Estatistica" element={<><NavTab/> <Estatistica /> </>} />
        <Route path="/processos" element={<><NavTab/> <Processos /> </>} />
        <Route path="/perfil" element={<><NavTab/> <Profile /> </>} />
        <Route path="/informativos" element={<><NavTab/><Informativos /> </>} />
        <Route path="/informativos/setor/almoxarifado" element={<><NavTab/> <Almoxarifado /> </>} />
        <Route path="/informativos/setor/financeiro" element={<><NavTab/> <Financeiro /> </>} />
        <Route path="/informativos/setor/operacional" element={<><NavTab/> <Operacional /> </>} />
        <Route path="/informativos/setor/recursos-humanos" element={<><NavTab/> <RecursosHumanos /> </>} />
        <Route path="/tarefas" element={<><NavTab/> <Tarefas/> </>}/>
        <Route path="/tarefas" element={<><NavTab/> <Estatistica/> </>}/>

      </Routes>
      <Footer /> 
    </Router>
  );
};

export default Roteador;
