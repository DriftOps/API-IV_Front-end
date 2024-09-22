import React, { useState } from 'react';
import './Processos.css';
import OrderDropdown from './OrderDropdown';
import OrderTimeline from './OrderTimeline';
import CadastroPopup from './CadastroPopup';

const Processos: React.FC = () => {
  const [selectedProcesso, setSelectedProcesso] = useState<string | null>(null);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  // Simulando os processos já cadastrados
  const processos = {
    '09878': [
      {
        status: 'Operacional',
        location: 'Cibitung Jakarta Indonesia',
        date: '16 Nov 2021 18:10:05',
        details: 'O sistema operacional foi atualizado com sucesso e os testes de rede foram concluídos.',
        responsavel: 'João Da Silva',
        outrasInformacoes: 'Atualização do sistema'
      },
      {
        status: 'Dispositivos De Backup',
        location: 'Assinatura de confirmação',
        date: '16 Nov 2021 18:15:00',
        details: 'João assinou a confirmação após verificação dos dispositivos de backup.',
        responsavel: 'João Da Silva',
        outrasInformacoes: 'Verificação dos dispositivos de backup'
      },
      {
        status: 'Comercial',
        location: 'Karawang Indonesia',
        date: '16 Nov 2021 18:23:05',
        details: 'A equipe comercial aprovou os relatórios financeiros do último trimestre. Clique para ver o mapa.',
        responsavel: 'Livia Andrade',
        outrasInformacoes: 'Aprovação dos relatórios financeiros'
      }
    ],
    
    '12345': [
      { 
        status: 'Preparação', 
        location: 'São Paulo Brasil', 
        date: '10 Ago 2022 14:10:05', 
        details: 'Documentos fiscais gerados e a verificação inicial de inventário foi concluída.',
        responsavel: 'Carlos Mendes',
        outrasInformacoes: 'Preparação e verificação de documentos fiscais'
      },
      { 
        status: 'Envio', 
        location: 'Brasília Brasil', 
        date: '10 Ago 2022 14:15:00', 
        details: 'O pacote foi enviado por transportadora local, previsão de entrega em 5 dias úteis.',
        responsavel: 'Fernanda Souza',
        outrasInformacoes: 'Envio de pacote com previsão de entrega'
      }
    ],
  
    '54321': [
      { 
        status: 'Recebido', 
        location: 'Lisboa Portugal', 
        date: '15 Dez 2022 08:10:05', 
        details: 'Documentos processados na aduana de Lisboa e autorização de importação concedida.',
        responsavel: 'Joana Pereira',
        outrasInformacoes: 'Recebimento e processamento de documentos'
      },
      { 
        status: 'Processado', 
        location: 'Madrid Espanha', 
        date: '15 Dez 2022 08:15:00', 
        details: 'Os itens foram processados no centro logístico de Madrid e estão prontos para transporte interno.',
        responsavel: 'Pedro Alonso',
        outrasInformacoes: 'Processamento dos itens no centro logístico'
      }
    ]
  };

  const handleSelectOrder = (orderId: string) => {
    setSelectedProcesso(orderId);
  };

  const handleCadastroClick = () => {
    setIsCadastroOpen(true);
  };

  const filteredProcessos = Object.keys(processos).filter((id) =>
    id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="container">
      <div className="header">
        <OrderDropdown orders={Object.keys(processos).map((id) => ({ id, name: `Processo ${id}` }))} onSelectOrder={handleSelectOrder} />
        <button className="cadastro-button" onClick={handleCadastroClick}>Cadastro +</button>
      </div>
      <input 
        type="search" 
        className="search-input" 
        value={searchQuery} 
        onChange={(e) => setSearchQuery(e.target.value)} 
        placeholder="Pesquisar processo" 
      />
      {selectedProcesso && processos[selectedProcesso] ? (
        <OrderTimeline events={processos[selectedProcesso]} />
      ) : (
        <p>Selecione um processo ou faça uma pesquisa.</p>
      )}
      
      {isCadastroOpen && <CadastroPopup onClose={() => setIsCadastroOpen(false)} />}
    </div>
  );
};

export default Processos;
