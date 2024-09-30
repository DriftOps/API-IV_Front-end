import React, { useState } from 'react';

const RedefinirSenha: React.FC = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(`Um e-mail foi enviado para ${email} com instruções para redefinir sua senha.`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Email <b>*</b></label>
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Digite seu email"
        required
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default RedefinirSenha;