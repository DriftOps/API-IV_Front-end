import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './login.css';
import { FaEnvelope, FaLock } from 'react-icons/fa';


const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); 

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (email === 'admin@example.com' && password === '1234') {
      navigate('/processos'); 
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div className='background'>
      <form className='form-container' onSubmit={handleLogin}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <p style={{ textAlign: 'center' }}>Novo no site? <a href="/register">Registre-se</a></p>

        <label>Email <b>*</b></label>
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

        <label>Senha <b>*</b></label>
        <div className="input-wrapper">
          <FaLock className="icon" />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Senha"
            required
          />
        </div>

        <a className='forgot' href="/forgot-password">Esqueceu a senha?</a>
        <button type="submit">Entrar</button>
      </form>
    </div>
  );
};

export default Login;
