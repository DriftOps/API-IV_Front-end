const express = require('express');
const mysql = require('mysql2'); // Se você estiver usando MySQL
const cors = require('cors'); // Importando o cors
const app = express();

// Middleware para permitir CORS
app.use(cors());

// Middleware para analisar requisições com JSON no corpo
app.use(express.json());

// Conexão com o banco de dados MySQL
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '12345', // Insira a sua senha do banco de dados
  database: 'jjm_bd', // Insira o nome do seu banco de dados
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
  const { events } = req.body;

  // Query para inserir o processo no banco (não precisa do id)
  db.query('INSERT INTO processos () VALUES ()', (err, result) => {
    if (err) {
      console.error('Erro ao inserir processo:', err);
      return res.status(500).json({ error: 'Erro ao cadastrar processo' });
    }

    const processoId = result.insertId; // Obtém o id gerado

    // Inserir os eventos relacionados ao processo
    const insertEvents = events.map((event) => {
      return new Promise((resolve, reject) => {
        const query = `
          INSERT INTO eventos 
          (processo_id, status, sector, location, date, details, responsavel, outrasInformacoes)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?)
        `;
        db.query(
          query,
          [
            processoId,
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
              reject(err);
            } else {
              resolve();
            }
          }
        );
      });
    });

    Promise.all(insertEvents)
      .then(() => {
        // Retornar o id do processo cadastrado
        res.status(201).json({ id: processoId, message: 'Processo cadastrado com sucesso' });
      })
      .catch((err) => {
        console.error('Erro ao inserir eventos:', err);
        res.status(500).json({ error: 'Erro ao cadastrar eventos' });
      });
  });
});
