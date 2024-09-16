import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Substitua useHistory por useNavigate

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate(); // useNavigate substitui o useHistory

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Implementar lógica de autenticação
    if (email === 'admin@example.com' && password === 'password') {
      navigate('/processos'); // Redireciona para "/processos" após login bem-sucedido
    } else {
      alert('Email ou senha incorretos.');
    }
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
        <h1 style={{ textAlign: 'center' }}>Login</h1>
        <p style={{ textAlign: 'center' }}>Novo no site? <a href="/register">Registre-se</a></p>
        <label>Email *</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          style={{ marginBottom: '10px', padding: '8px' }}
          required
        />
        <label>Senha *</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Senha"
          style={{ marginBottom: '10px', padding: '8px' }}
          required
        />
        <a href="/forgot-password" style={{ marginBottom: '10px' }}>Esqueceu a senha?</a>
        <button type="submit" style={{ padding: '10px', backgroundColor: 'black', color: 'white' }}>Login</button>
      </form>
    </div>
  );
};

export default Login;
