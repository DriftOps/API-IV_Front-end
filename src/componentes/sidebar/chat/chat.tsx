import React, { useState } from 'react';
import './chat.css';

function PaginaDeChat() {
  const [equipeSelecionada, setEquipeSelecionada] = useState(null);
  const [mensagem, setMensagem] = useState('');
  const [arquivo, setArquivo] = useState(null); // Estado para armazenar o arquivo selecionado
  const [mensagensPorEquipe, setMensagensPorEquipe] = useState({
    'Comercial': [],
    'Operacional': [],
    'Financeiro': [],
    'Recursos Humanos': [],
  });

  const equipes = ['Comercial', 'Operacional', 'Financeiro', 'Recursos Humanos'];

  const selecionarEquipe = (equipe) => {
    setEquipeSelecionada(equipe);
  };

  const enviarMensagem = (e) => {
    if (e.key === 'Enter' && mensagem.trim() !== '') {
      setMensagensPorEquipe((prev) => ({
        ...prev,
        [equipeSelecionada]: [
          ...prev[equipeSelecionada],
          { texto: mensagem, usuario: 'Eu' },
        ],
      }));
      setMensagem('');
    }
  };

  const anexarArquivo = (e) => {
    const file = e.target.files[0];
    if (file) {
      setArquivo(file); // Armazena o arquivo selecionado
      const fileUrl = URL.createObjectURL(file); // Cria uma URL para o arquivo
      setMensagensPorEquipe((prev) => ({
        ...prev,
        [equipeSelecionada]: [
          ...prev[equipeSelecionada],
          { texto: `Arquivo: ${file.name}`, usuario: 'Eu', url: fileUrl }, // Adiciona o arquivo às mensagens
        ],
      }));
    }
  };

  return (
    <div className="chat-container">
      <div className="equipeLista">
        <h2>Equipes</h2>
        <ul className="listaEquipes">
          {equipes.map((equipe, index) => (
            <li
              key={index}
              className="equipeItem"
              onClick={() => selecionarEquipe(equipe)}
            >
              {equipe}
            </li>
          ))}
        </ul>
      </div>
      <div className="areaDeChat">
        <h2>{equipeSelecionada ? `Chat do ${equipeSelecionada}` : 'Selecione uma equipe'}</h2>

        <div className="mensagens">
          {equipeSelecionada && mensagensPorEquipe[equipeSelecionada].map((msg, index) => (
            <p key={index} className={msg.usuario === 'Eu' ? 'mensagemUsuario' : 'mensagemOutro'}>
              {msg.url ? (
                <a href={msg.url} download>{msg.texto}</a> // Adiciona um link para baixar o arquivo
              ) : (
                msg.texto
              )}
            </p>
          ))}
        </div>

        <footer className="footerChat input">
          <input
            type="text"
            value={mensagem}
            onChange={(e) => setMensagem(e.target.value)}
            onKeyDown={enviarMensagem}
            placeholder="Digite sua mensagem..."
          />
          <input
            type="file"
            onChange={anexarArquivo}
            style={{ display: 'none' }} // Oculta o campo de input de arquivo
            id="fileInput"
          />
          <label htmlFor="fileInput" className="btnAnexar">📎</label>
        </footer>
      </div>
    </div>
  );
}

export default PaginaDeChat;
