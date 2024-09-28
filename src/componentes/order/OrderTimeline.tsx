import React, { useState } from 'react';

interface Event {
  status: string;
  location: string;
  date: string;
  details: string;
  responsavel: string;
  outrasInformacoes: string;
}

interface OrderTimelineProps {
  events: Event[];
}

const OrderTimeline: React.FC<OrderTimelineProps> = ({ events }) => {
  const [openDetails, setOpenDetails] = useState<{ [key: number]: boolean }>({});

  const toggleDetails = (index: number) => {
    setOpenDetails((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
      {events.map((event, index) => (
        <div
          key={index}
          style={{
            display: 'flex',
            flexDirection: 'column',
            padding: '10px',
            marginBottom: '20px',
            border: '1px solid #ddd',
            borderRadius: '5px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0px 0px 10px rgba(0,0,0,0.1)',
          }}
        >
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              position: 'relative',
            }}
          >
            {/* Círculo indicador de completado ou pendente */}
            <div
              style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                backgroundColor: index === events.length - 1 ? 'white' : 'green',
                border: index === events.length - 1 ? '2px solid gray' : 'none',
                marginRight: '10px',
                position: 'absolute',
                left: '-30px',
              }}
            ></div>

            {/* Linha entre os círculos */}
            {index !== events.length - 1 && (
              <div
                style={{
                  width: '2px',
                  height: '100%',
                  backgroundColor: '#ddd',
                  position: 'absolute',
                  left: '-21px',
                  top: '30px',
                  zIndex: -1,
                }}
              />
            )}

            {/* Informações do processo */}
            <div style={{ flexGrow: 1 }}>
              <h4 style={{ margin: '0', color: index === events.length - 1 ? 'black' : 'blue' }}>
                {event.status}
              </h4>
              <p style={{ margin: '5px 0', fontSize: '14px' }}>{event.location}</p>
              <p style={{ margin: '0', fontSize: '12px', color: '#888' }}>{event.date}</p>
            </div>

            {/* Botão de mostrar/ocultar detalhes */}
            <button
              onClick={() => toggleDetails(index)}
              style={{
                padding: '5px 10px',
                backgroundColor: '#007bff',
                color: 'white',
                border: 'none',
                borderRadius: '5px',
                cursor: 'pointer',
              }}
            >
              {openDetails[index] ? 'Ocultar Detalhes' : 'Ver Detalhes'}
            </button>
          </div>

          {/* Detalhes colapsáveis */}
          {openDetails[index] && (
            <div style={{ marginTop: '10px', paddingLeft: '30px' }}>
              <p style={{ margin: '5px 0' }}>
                <strong>Detalhes:</strong> {event.details}
              </p>
              <p style={{ margin: '5px 0' }}>
                <strong>Responsável:</strong> {event.responsavel}
              </p>
              <p style={{ margin: '5px 0' }}>
                <strong>Outras informações:</strong> {event.outrasInformacoes}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default OrderTimeline;
