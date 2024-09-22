import React, { useState } from 'react';
import './Processos.css';



interface Event {
  status: string;
  location: string;
  date: string;
  details: string;
  responsavel: string;
  outrasInformacoes: string;
}

interface Processo {
  id: string;
  events: Event[];
}

const Processos: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [openDetails, setOpenDetails] = useState<{ [key: string]: number | null }>({});

  const processos: Processo[] = [
    {
      id: '12345',
      events: [
        {
          status: 'Preparação',
          location: 'São Paulo Brasil',
          date: '10 Ago 2022 14:10:05',
          details: 'Documentos fiscais gerados e a verificação inicial de inventário foi concluída.',
          responsavel: 'Carlos Mendes',
          outrasInformacoes: 'Preparação e verificação de documentos fiscais',
        },
        {
          status: 'Envio',
          location: 'Brasília Brasil',
          date: '10 Ago 2022 14:15:00',
          details: 'O pacote foi enviado por transportadora local, previsão de entrega em 5 dias úteis.',
          responsavel: 'Fernanda Souza',
          outrasInformacoes: 'Envio de pacote com previsão de entrega',
        },
      ],
    },
    {
      id: '54321',
      events: [
        {
          status: 'Recebido',
          location: 'Lisboa Portugal',
          date: '15 Dez 2022 08:10:05',
          details: 'Documentos processados na aduana de Lisboa e autorização de importação concedida.',
          responsavel: 'Joana Pereira',
          outrasInformacoes: 'Recebimento e processamento de documentos',
        },
        {
          status: 'Processado',
          location: 'Madrid Espanha',
          date: '15 Dez 2022 08:15:00',
          details: 'Os itens foram processados no centro logístico de Madrid e estão prontos para transporte interno.',
          responsavel: 'Pedro Alonso',
          outrasInformacoes: 'Processamento dos itens no centro logístico',
        },
      ],
    },
    {
      id: '09879',
      events: [
        {
          status: 'Operacional',
          location: 'Cibitung Jakarta Indonesia',
          date: '16 Nov 2021 18:10:05',
          details: 'O sistema operacional foi atualizado com sucesso e os testes de rede foram concluídos.',
          responsavel: 'João Da Silva',
          outrasInformacoes: 'Atualização do sistema',
        },
        {
          status: 'Comercial',
          location: 'Karawang Indonesia',
          date: '16 Nov 2021 16:23:05',
          details: 'A equipe comercial aprovou os relatórios financeiros do último trimestre.',
          responsavel: 'Livia Andrade',
          outrasInformacoes: 'Aprovação dos relatórios financeiros',
        },
      ],
    },
  ];

  const filteredProcessos = processos.filter((processo) =>
    processo.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDetails = (processoId: string, eventIndex: number) => {
    setOpenDetails((prevDetails) => ({
      ...prevDetails,
      [processoId]: prevDetails[processoId] === eventIndex ? null : eventIndex,
    }));
  };

  return (
    <div className="container">
      <h2 className="title">Lista de Processos</h2>
      <input
        type="search"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pesquisar processo"
        className="search-input"
      />
      {filteredProcessos.map((processo) => (
        <div key={processo.id} className="processo-card">
          <h3 className="processo-title">{processo.id}</h3>
          {processo.events.map((event, index) => (
            <div key={index} className="event-item">
              <h4 className={`event-status ${index === processo.events.length - 1 ? 'completed' : ''}`}>
                {event.status}
              </h4>
              <p className="event-info">
                {event.location} - {event.date}
              </p>
              <button
                onClick={() => toggleDetails(processo.id, index)}
                className="event-details-button"
              >
                {openDetails[processo.id] === index ? 'Ocultar Detalhes' : 'Ver Detalhes'}
              </button>
              {openDetails[processo.id] === index && (
                <div className="event-details">
                  <p>
                    <strong>Detalhes:</strong> {event.details}
                  </p>
                  <p>
                    <strong>Responsável:</strong> {event.responsavel}
                  </p>
                  <p>
                    <strong>Outras informações:</strong> {event.outrasInformacoes}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Processos;
