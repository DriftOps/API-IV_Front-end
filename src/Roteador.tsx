import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { FuncionarioProvider } from './componentes/sidebar/AdicionarUsuario/FuncionarioContext';

// Importações de componentes
import Login from './componentes/login/Login';
import NavTab from './componentes/nav-tab/nav-tab';
import Footer from './componentes/footer/Footer';
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
import Informativos from './componentes/informativos/informativos';
import Almoxarifado from './componentes/informativos/setores/almoxarifado';
import Financeiro from './componentes/informativos/setores/financeiro';
import Operacional from './componentes/informativos/setores/operacional';
import RecursosHumanos from './componentes/informativos/setores/recursos-humanos';
import Comercial from './componentes/informativos/setores/comercial';
import Profile from './componentes/profile/Perfil';
import ListarUsuarios from './componentes/sidebar/AdicionarUsuario/ListarUsuarios';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  setor: string;
  dataNascimento: string;
  email: string;
}

const Roteador: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  const handleAddFuncionario = (funcionario: Funcionario) => {
    setFuncionarios((prev) => [...prev, funcionario]);
  };

  const handleDeleteFuncionario = (id: string) => {
    setFuncionarios((prev) => prev.filter((funcionario) => funcionario.id !== id));
  };

  const handleListFuncionarios = () => {
    console.log('Funcionários cadastrados:', funcionarios);
  };

  const routes = [
    { path: "/", element: <Login /> },
    { path: "/login", element: <Login /> },
    { path: "/principal", element: <><NavTab /> <Principal /></> },
    { path: "/adicionarUsuario", element: <><NavTab /> <AdicionarUsuario 
      onAdd={handleAddFuncionario} 
      onDelete={handleDeleteFuncionario} 
      onList={handleListFuncionarios}/> </> },
    { path: "/listagem", element: <><NavTab /> <ListarUsuarios/></> },
    { path: "/veiculos", element: <><NavTab /> <ListaVeiculos /></> },
    { path: "/veiculos/:id", element: <><NavTab /> <Veiculos /></> },
    { path: "/veiculos/novo", element: <><NavTab /> <AdicionarVeiculo /></> },
    { path: "/Configuracao", element: <><NavTab /> <Configuracao /></> },
    { path: "/Estatistica", element: <><NavTab /> <Estatistica /></> },
    { path: "/processos", element: <><NavTab /> <Processos /></> },
    { path: "/tarefas", element: <><NavTab /> <Tarefas /></> },
    { path: "/chat", element: <><NavTab /> <Chat /></> },
    { path: "/perfil", element: <><NavTab /> <Profile /></> },
    { path: "/informativos", element: <><NavTab /><Informativos /></> },
    { path: "/informativos/setor/almoxarifado", element: <><NavTab /> <Almoxarifado /></> },
    { path: "/informativos/setor/financeiro", element: <><NavTab /> <Financeiro /></> },
    { path: "/informativos/setor/operacional", element: <><NavTab /> <Operacional /></> },
    { path: "/informativos/setor/comercial", element: <><NavTab /> <Comercial /></> },
    { path: "/informativos/setor/recursos-humanos", element: <><NavTab /> <RecursosHumanos /></> },
  ];

  return (
    <FuncionarioProvider>
      <Router>
        <Routes>
          {routes.map(({ path, element }) => (
            <Route key={path} path={path} element={element} />
          ))}
        </Routes>
        <Footer />
      </Router>
    </FuncionarioProvider>
  );
};

export default Roteador;