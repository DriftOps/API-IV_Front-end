const express = require('express');
const mysql = require('mysql2'); // Se você estiver usando MySQL
const app = express();

// Middleware para analisar requisições com JSON no corpo
app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'password', // Insira a sua senha do banco de dados
  database: 'processos_db', // Insira o nome do seu banco de dados
});

// Verificar se a conexão está funcionando
db.connect((err) => {
  if (err) {
    console.error('Erro ao conectar ao MySQL:', err);
  } else {
    console.log('Conectado ao banco de dados MySQL!');
  }
});

// Rota para cadastrar um novo processo
app.post('/api/processos', (req, res) => {
  const { id, events } = req.body;

  // Query para inserir o processo no banco
  db.query('INSERT INTO processos (id) VALUES (?)', [id], (err) => {
    if (err) {
      console.error('Erro ao inserir processo:', err);
      return res.status(500).json({ error: 'Erro ao cadastrar processo' });
    }

    // Inserir os eventos relacionados ao processo
    events.forEach((event) => {
      const query = `
        INSERT INTO eventos 
        (processo_id, status, sector, location, date, details, responsavel, outrasInformacoes)
        VALUES (?, ?, ?, ?, ?, ?, ?, ?)
      `;
      db.query(
        query,
        [
          id,
          event.status,
          event.sector,
          event.location,
          event.date,
          event.details,
          event.responsavel,
          event.outrasInformacoes,
        ],
        (err) => {
          if (err) {
            console.error('Erro ao inserir evento:', err);
            return res.status(500).json({ error: 'Erro ao cadastrar evento' });
          }
        }
      );
    });

    res.status(201).json({ message: 'Processo cadastrado com sucesso' });
  });
});

// Iniciar o servidor na porta 3001
app.listen(3001, () => {
  console.log('Servidor rodando na porta 3001');
});
