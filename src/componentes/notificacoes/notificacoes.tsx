import React, { Component } from 'react';
import './notificacoes.css';

type Notification = {
  id: number;
  icon: string;
  title: string;
  content: string;
  date: string;
  buttons: { text: string; type: 'primary' | 'secondary' }[];
};

type State = {
  isOpen: boolean;
  notifications: Notification[];
};

export default class Notificações extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      isOpen: false,
      notifications: [
        {
          id: 1,
          icon: 'bx bx-user',
          title: 'Cliente 1',
          content: 'Mensagem 1',
          date: 'Oct 30, 2024 | 5:03 AM',
          buttons: [
            { text: 'Ignorar', type: 'secondary' },
            { text: 'Visualizar', type: 'primary' },
          ],
        },
        {
          id: 2,
          icon: 'bx bx-user-circle',
          title: 'Setor 1',
          content: 'Mensagem 2',
          date: 'Oct 21, 2024 | 3:03 AM',
          buttons: [
            { text: 'Ignorar', type: 'secondary' },
            { text: 'Visualizar', type: 'primary' },
          ],
        },
        {
          id: 3,
          icon: 'bx bxs-dollar-circle',
          title: 'Admnistrador 1',
          content: 'Mensagem 3',
          date: 'Oct 18, 2024 | 9:14 PM',
          buttons: [
            { text: 'Ignorar', type: 'secondary' },
            { text: 'Visualizar', type: 'primary' },
          ],
        },
      ],
    };
  }

  toggleMenu = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  closeMenu = () => {
    this.setState({ isOpen: false });
  };

  render() {
    const { isOpen, notifications } = this.state;

    return (
      <>
        <link
          href="https://unpkg.com/boxicons@2.1.2/css/boxicons.min.css"
          rel="stylesheet"
        />
        <nav className="notif-nav">
          <button className="notif-button" onClick={this.toggleMenu}>
            <i className="bx bxs-bell"></i>
          </button>

          <div className={`notif-dropdown ${isOpen ? 'notif-open' : ''}`}>
            <div className="notif-dropdown-content">
              <h3>Notificações</h3>
              <ul className="notif-list">
                {notifications.map((notification) => (
                  <li className="notif-item" key={notification.id}>
                    <div className="notif-header">
                      <i className={notification.icon}></i>
                      <div>
                        <span className="notif-title">{notification.title}</span>
                        <p className="notif-content">{notification.content}</p>
                        <span className="notif-date">{notification.date}</span>
                      </div>
                    </div>
                    <div className="notif-buttons">
                      {notification.buttons.map((button, index) => (
                        <button
                          key={index}
                          className={`notif-btn ${
                            button.type === 'primary' ? 'primary' : 'secondary'
                          }`}
                        >
                          {button.text}
                        </button>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </nav>
        <div
          className={`notif-overlay ${isOpen ? 'notif-overlay-active' : ''}`}
          onClick={this.closeMenu}
        ></div>
      </>
    );
  }
}