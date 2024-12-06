import React, { Component, useState } from 'react';
import './sidebar.css';

type State = {
  isOpen: boolean;
};

export default class Sidebar extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen } = this.state;

    return (
      <>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <nav className={isOpen ? 'open' : ''}>
          <button className="menu-button" onClick={this.toggleMenu}>
            <i className="bx bx-menu"></i>
          </button>

          {isOpen && (
            <>
              <div className="sidebar">
                <div className="sidebar-content">

                  <ul className="lists">
                    <li className="list">
                      <a href="/principal" className="nav-link">
                        <i className="bx bxs-dashboard"></i>
                        <span className="link">Principal</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="/veiculos" className="nav-link">
                        <i className="bx bx-car"></i>
                        <span className="link">Veículos</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="Estatistica" className="nav-link">
                        <i className="bx bx-stats"></i>
                        <span className="link">Estatísticas</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="/chat" className="nav-link">
                        <i className="bx bx-chat"></i>
                        <span className="link">Chat</span>
                      </a>
                    </li>

                    <li className="list">
                      <a href="/AdicionarUsuario" className="nav-link">
                        <i className="bx bx-user"></i>
                        <span className="link">Adicionar Usuário</span>
                      </a>
                    </li>

                    <li className="list">
                      <a href="/listagem" className="nav-link">
                        <i className="bx bx-user"></i>
                        <span className="link">Listagem</span>
                      </a>
                    </li>
                </ul>
            </div>
          </div>
        </>
          )}
        </nav>
        <div className={`overlay ${isOpen ? 'active' : ''}`} onClick={this.closeMenu}></div>
      </>
    );
  }
}