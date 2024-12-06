import React, { useState } from 'react';
import './Processos.css';
import OrderDropdown from '../order/OrderDropdown';
import OrderTimeline from '../order/OrderTimeline';
import CadastroPopup from '../cadastro/CadastroPopup';

interface Event {
  status: string;
  sector: string;
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
  const [processos, setProcessos] = useState<Processo[]>([
    {
      id: '12345',
      events: [
        {
          status: 'Preparação',
          sector: 'Operacional',
          location: 'São Paulo, Brasil',
          date: '10 Ago 2022 14:10:05',
          details: 'Documentos fiscais gerados e a verificação inicial de inventário foi concluída.',
          responsavel: 'Carlos Mendes',
          outrasInformacoes: 'Preparação e verificação de documentos fiscais',
        },
        {
          status: 'Envio',
          sector: 'Operacional',
          location: 'Brasília, Brasil',
          date: '10 Ago 2022 14:15:00',
          details: 'O pacote foi enviado por transportadora local, previsão de entrega em 5 dias úteis.',
          responsavel: 'Fernanda Souza',
          outrasInformacoes: 'Envio de pacote com previsão de entrega',
        },
      ],
    },
    {
      id: '67890',
      events: [
        {
          status: 'Recebimento',
          sector: 'Logística',
          location: 'Rio de Janeiro, Brasil',
          date: '15 Out 2022 09:05:00',
          details: 'Produto chegou à unidade de recebimento e foi inspecionado.',
          responsavel: 'Gustavo Lima',
          outrasInformacoes: 'Inspeção de qualidade realizada.',
        },
        {
          status: 'Em Transito',
          sector: 'Logística',
          location: 'Minas Gerais, Brasil',
          date: '16 Out 2022 10:30:00',
          details: 'O pacote segue para o próximo ponto de distribuição.',
          responsavel: 'Juliana Costa',
          outrasInformacoes: 'Aguardando despacho.',
        },
      ],
    },
  ]);

  const [selectedProcesso, setSelectedProcesso] = useState<string | null>(null);
  const [isCadastroOpen, setIsCadastroOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [openDetails, setOpenDetails] = useState<{ [key: string]: number | null }>({});
  const [newEventStatus, setNewEventStatus] = useState<string>('Produto recebido'); // Título fixo para a nova etapa

  const handleSelectOrder = (orderId: string) => {
    setSelectedProcesso(orderId);
  };

  const handleCadastroClick = () => {
    setIsCadastroOpen(true);
  };

  const addProcesso = (novoProcesso: Processo) => {
    setProcessos((prevProcessos) => [...prevProcessos, novoProcesso]);
  };

  const filteredProcessos = processos.filter((processo) =>
    processo.id.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const toggleDetails = (processoId: string, eventIndex: number) => {
    setOpenDetails((prevDetails) => ({
      ...prevDetails,
      [processoId]: prevDetails[processoId] === eventIndex ? null : eventIndex,
    }));
  };

  // Função para adicionar uma nova etapa com setor e responsável da etapa anterior
  const addNewEvent = (processoId: string) => {
    const processo = processos.find((p) => p.id === processoId);
    if (processo && processo.events.length > 0) {
      const lastEvent = processo.events[processo.events.length - 1];

      const novoEvento: Event = {
        status: newEventStatus,
        sector: lastEvent.sector, // Copiar o setor da última etapa
        location: 'Nova Localização',
        date: new Date().toLocaleString(),
        details: 'Detalhes da nova etapa',
        responsavel: lastEvent.responsavel, // Copiar o responsável da última etapa
        outrasInformacoes: 'Informações adicionais',
      };

      setProcessos((prevProcessos) =>
        prevProcessos.map((processo) =>
          processo.id === processoId
            ? { ...processo, events: [...processo.events, novoEvento] }
            : processo
        )
      );
    }
  };

  return (
    <div className="container">
      <div className="header">
        <OrderDropdown
          orders={filteredProcessos.map(({ id }) => ({ id, name: `Processo ${id}` }))}
          onSelectOrder={handleSelectOrder}
        />
        <button className="cadastro-button" onClick={handleCadastroClick}>
          Cadastro +
        </button>
      </div>

      <input
        type="search"
        className="search-input"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        placeholder="Pesquisar processo"
      />

      {selectedProcesso && filteredProcessos.find((p) => p.id === selectedProcesso) ? (
        <OrderTimeline events={filteredProcessos.find((p) => p.id === selectedProcesso)!.events} />
      ) : (
        <p>Selecione um processo ou faça uma pesquisa.</p>
      )}

      {isCadastroOpen && (
        <CadastroPopup
          onClose={() => setIsCadastroOpen(false)}
          addProcesso={addProcesso}
        />
      )}

      {filteredProcessos.map((processo) => (
        <div key={processo.id} className="processo-card">
          <h3 className="processo-title">{processo.id}</h3>
          {processo.events.map((event, index) => (
            <div key={index} className="event-item">
              <h4 className={`event-status ${index < processo.events.length - 1 ? 'completed' : ''}`}>
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
                  <p><strong>Setor:</strong> {event.sector}</p>
                  <p><strong>Detalhes:</strong> {event.details}</p>
                  <p><strong>Responsável:</strong> {event.responsavel}</p>
                  <p><strong>Outras informações:</strong> {event.outrasInformacoes}</p>
                </div>
              )}

              {/* Bolinha indicando o status */}
              <div
                className={`event-ball ${index < processo.events.length - 1 ? 'completed-ball' : ''}`}
              ></div>
            </div>
          ))}

          {/* Botão para adicionar nova etapa */}
          <button
            onClick={() => addNewEvent(processo.id)}
            className="add-event-button"
          >
            Adicionar Etapa
          </button>
        </div>
      ))}
    </div>
  );
};

export default Processos;
