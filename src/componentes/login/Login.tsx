import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './login.css';
import { FaEnvelope, FaLock, FaEye, FaEyeSlash } from 'react-icons/fa';
import RedefinirSenha from './redefinirSenha';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === '1234') {
      navigate('/principal');
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };

  return (
    <div className='background'>
      <form className='form-container' onSubmit={handleLogin}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        {/* <p style={{ textAlign: 'center' }}>Novo no site? <Link to="/register">Registre-se</Link></p> */}

        <label>Email<b>*</b></label>
        <div className="input-wrapper">
          <FaEnvelope className="icon" />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
        </div>

        <label>Senha<b>*</b></label>
        <div className="input-wrapper" style={{ position: 'relative' }}>
          <FaLock className="icon" />
          <input
            type={showPassword ? "text" : "password"}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
            style={{ paddingRight: '40px', paddingLeft: '30px' }}
          />
          <span
            onClick={() => setShowPassword(!showPassword)}
            style={{
              cursor: "pointer",
              position: 'absolute',
              right: '12px',
              top: '50%',
              transform: 'translateY(-70%)'
            }}
          >
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </span>
        </div>

        <span className='forgot' onClick={togglePopup}>Esqueceu a senha?</span>
        <button type="submit">Entrar</button>
      </form>

      {isPopupOpen && (
        <div className='popup'>
          <div className='popup-content'>
            <button onClick={togglePopup} className='close-popup'>X</button>
            <h2>Redefinir Senha</h2>
            <RedefinirSenha />
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;