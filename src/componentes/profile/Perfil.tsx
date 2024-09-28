import { Component } from 'react';
import './Perfil.css';
import userphoto from '../img/user.png';


export default class Profile extends Component{
  render() {
  return (
    <div className="profile">
      <img src={userphoto} alt='perfil' className='profile-pic'/>
      <h2 className="profile-name">User</h2>
      <p className="profile-id">ID: 123456</p>

      <div className="profile-info">
        <p><strong>Nome:</strong> User</p>
        <p><strong>CPF:</strong> 123.456.789-00</p>
        <p><strong>RG:</strong> 12.345.678-9</p>
      </div>
    </div>
   );
  }
};

