const mysql = require('mysql2');

// Conexão com o banco de dados
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password',  // insira sua senha do MySQL
  database: 'processos_db'
});

db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao banco de dados:', err);
    return;
  }
  console.log('Conectado ao banco de dados MySQL.');

  // Dados para inserção
  const processos = [
    {
      id: '12345',
      events: [
        {
          status: 'Preparação',
          sector: 'Operacional',
          location: 'São Paulo, Brasil',
          date: '2022-08-10 14:10:05',
          details: 'Documentos fiscais gerados e a verificação inicial de inventário foi concluída.',
          responsavel: 'Carlos Mendes',
          outrasInformacoes: 'Preparação e verificação de documentos fiscais',
        },
        {
          status: 'Envio',
          sector: 'Operacional',
          location: 'Brasília, Brasil',
          date: '2022-08-10 14:15:00',
          details: 'O pacote foi enviado por transportadora local, previsão de entrega em 5 dias úteis.',
          responsavel: 'Fernanda Souza',
          outrasInformacoes: 'Envio de pacote com previsão de entrega',
        },
      ],
    },
    // Outros processos podem ser adicionados aqui...
  ];

  // Função para inserir dados no banco de dados
  const insertData = () => {
    processos.forEach((processo) => {
      // Inserir o processo na tabela 'processos'
      db.query('INSERT INTO processos (id) VALUES (?)', [processo.id], (err) => {
        if (err) {
          console.error('Erro ao inserir processo:', err);
          return;
        }

        // Inserir os eventos na tabela 'eventos'
        processo.events.forEach((event) => {
          const query = `
            INSERT INTO eventos 
            (processo_id, status, sector, location, date, details, responsavel, outrasInformacoes)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?)
          `;
          db.query(query, [
            processo.id, 
            event.status, 
            event.sector, 
            event.location, 
            event.date, 
            event.details, 
            event.responsavel, 
            event.outrasInformacoes
          ], (err) => {
            if (err) {
              console.error('Erro ao inserir evento:', err);
              return;
            }
            console.log('Evento inserido com sucesso!');
          });
        });
      });
    });
  };

  // Inserir os dados
  insertData();
});
