import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// Importações de componentes
import Login from './componentes/login/Login';
import NavTab from './componentes/nav-tab/nav-tab';
import Footer from './componentes/footer/Footer';

// Sidebar
import Principal from './componentes/sidebar/principal/principal';
import ListaVeiculos from './componentes/sidebar/veiculos/ListaVeiculos';
import AdicionarVeiculo from './componentes/sidebar/veiculos/AdicionarVeiculo';
import Veiculos from './componentes/sidebar/veiculos/veiculos';
import AdicionarUsuario from './componentes/sidebar/AdicionarUsuario/AdicionarUsuario';
import Configuracao from './componentes/sidebar/Configuracao/Configuracao';
import Estatistica from './componentes/sidebar/Estatistica/Estatistica';
import Processos from './componentes/processos/Processos';
import Tarefas from './componentes/tarefas/tarefas';
import Chat from './componentes/sidebar/chat/chat';

// Informativos
import Informativos from './componentes/informativos/informativos';
import Almoxarifado from './componentes/informativos/setores/almoxarifado';
import Financeiro from './componentes/informativos/setores/financeiro';
import Operacional from './componentes/informativos/setores/operacional';
import RecursosHumanos from './componentes/informativos/setores/recursos-humanos';
import Comercial from './componentes/informativos/setores/comercial';
import Profile from './componentes/profile/Perfil';

// Componente ListarUsuarios (ListarFuncionarios)
import ListarUsuarios from './componentes/sidebar/AdicionarUsuario/ListarUsuarios';

const Roteador: React.FC = () => {
  // Função para manipular a adição de usuários
  const handleAddUsuario = (dadosUsuario: any) => {
    console.log('Usuário adicionado:', dadosUsuario);
    // Adicione aqui a lógica para salvar no backend ou no estado global
  };

  return (
    <Router>
      <Routes>
        {/* Rotas principais */}
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/principal" element={<><NavTab /> <Principal /></>} />

        {/* Rotas de usuários e funcionários */}
        <Route 
          path="/adicionarUsuario" 
          element={<><NavTab /> <AdicionarUsuario /></>} 
        />
        <Route 
          path="/listagem" 
          element={<><NavTab /> <ListarUsuarios /> </>} 
        />

        {/* Rotas de veículos */}
        <Route path="/veiculos" element={<><NavTab /> <ListaVeiculos /></>} />
        <Route path="/veiculos/:id" element={<><NavTab /> <Veiculos /></>} />
        <Route path="/veiculos/novo" element={<><NavTab /> <AdicionarVeiculo /></>} />

        {/* Rotas de configurações e tarefas */}
        <Route path="/Configuracao" element={<><NavTab /> <Configuracao /></>} />
        <Route path="/Estatistica" element={<><NavTab /> <Estatistica /></>} />
        <Route path="/processos" element={<><NavTab /> <Processos /></>} />
        <Route path="/tarefas" element={<><NavTab /> <Tarefas /></>} />
        <Route path="/chat" element={<><NavTab /> <Chat /></>} />

        {/* Rotas de perfis e informativos */}
        <Route path="/perfil" element={<><NavTab /> <Profile /></>} />
        <Route path="/informativos" element={<><NavTab /><Informativos /></>} />
        <Route path="/informativos/setor/almoxarifado" element={<><NavTab /> <Almoxarifado /></>} />
        <Route path="/informativos/setor/financeiro" element={<><NavTab /> <Financeiro /></>} />
        <Route path="/informativos/setor/operacional" element={<><NavTab /> <Operacional /></>} />
        <Route path="/informativos/setor/comercial" element={<><NavTab /> <Comercial /></>} />
        <Route path="/informativos/setor/recursos-humanos" element={<><NavTab /> <RecursosHumanos /></>} />
      </Routes>
      {/* Rodapé */}
      <Footer />
    </Router>
  );
};

export default Roteador;
