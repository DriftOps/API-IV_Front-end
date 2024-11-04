
  import React from 'react';
  import { Link } from 'react-router-dom';
  import './navbar.css';
  import Sidebar from '../sidebar/sidebar';
  import { Component } from 'react';
  import Notificações from '../notificacoes/notificacoes';


  export default class Header extends Component {
    render() {
    return (
      <header style={{}}>
      <div>        
            <img className="img" src='/img/jjm-log_logo_mini.png' width={160}></img>
        
        <div className="navbar">
        <div className="nav-items">
        <div className="back-button">
        <span>
          <Sidebar/>
          </span>
            </div>
            <span  className="nav-item">
            <Link to="/perfil" className='nav-item'>Perfil</Link>
            </span>
          <span className="nav-item ">
          <Link to="/tarefas" className='nav-item'>Tarefas</Link>
            </span>
            <span className="nav-item ">
          <Link to="/informativos" className='nav-item'>Informativos</Link>
            </span>
            <span className="nav-item ">
          <Link to="/processos" className='nav-item'>Processos</Link>
            </span>
          {/* <span className="nav-item ">
          <Link to="/historico" className='nav-item'>Histórico</Link>
            </span> */}
            <span>
              <Notificações/>
            </span>        
        </div>
      </div>
        </div>         
      </header>
    );
    }
  };

