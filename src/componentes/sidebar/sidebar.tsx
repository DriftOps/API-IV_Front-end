import React, { Component } from 'react';
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
                      <a href="#" className="nav-link">
                        <i className="bx bxs-dashboard"></i>
                        <span className="link">Principal</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-transfer-alt"></i>
                        <span className="link">Transferências</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-car"></i>
                        <span className="link">Veículos</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-user"></i>
                        <span className="link">Administradores</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-stats"></i>
                        <span className="link">Estatísticas</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-bell"></i>
                        <span className="link">Notificações</span>
                      </a>
                    </li>
                    <li className="list">
                      <a href="#" className="nav-link">
                        <i className="bx bx-cog"></i>
                        <span className="link">Adicionar administrador</span>
                      </a>
                    </li>
                  </ul>

                  <hr />

                  <div className="bottom-content">
                    <h5>Registro</h5>
                    <ul className="lists">
                      <li className="list">
                        <a href="#" className="nav-link">
                          <i className="bx bx-credit-card"></i>
                          <span className="link">Detalhes de pagamento</span>
                        </a>
                      </li>
                      <li className="list">
                        <a href="#" className="nav-link">
                          <i className="bx bx-spreadsheet"></i>
                          <span className="link">Relatório</span>
                        </a>
                      </li>
                    </ul>
                  </div>
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
