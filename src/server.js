import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors'; // Adicionando CORS
import CRUDUser from './user';
import CRUDClient from './client';
import CRUDProcesso from './processo'; // Adicionando CRUD de processos

const app = express();
const PORT = 3001;

// Middleware
app.use(bodyParser.json());
app.use(cors()); // Habilitar CORS para todas as requisições

// CRUD de Usuários
const crudUser = new CRUDUser();

app.post('/users', async (req: Request, res: Response) => {
  try {
    const user = req.body;
    const id = await crudUser.create(user);
    res.status(201).send(`User created with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating user');
  }
});

app.get('/users', async (req: Request, res: Response) => {
  try {
    const users = await crudUser.readAll();
    res.json(users);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving users');
  }
});

app.get('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = await crudUser.readOne(id);
    if (!user) {
      res.status(404).send('User not found');
    } else {
      res.json(user);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving user');
  }
});

app.put('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const user = req.body;
    user.id = id; // Adicionando ID ao objeto user
    await crudUser.update(user);
    res.send(`User updated with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating user');
  }
});

app.delete('/users/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await crudUser.delete(id);
    res.send(`User deleted with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting user');
  }
});

// CRUD de Clientes
const crudClient = new CRUDClient();

app.post('/clients', async (req: Request, res: Response) => {
  try {
    const client = req.body;
    const id = await crudClient.create(client);
    res.status(201).send(`Client added with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating client');
  }
});

app.get('/clients', async (req: Request, res: Response) => {
  try {
    const clients = await crudClient.readAll();
    res.json(clients);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving clients');
  }
});

app.get('/clients/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const client = await crudClient.readOne(id);
    if (!client) {
      res.status(404).send('Client not found');
    } else {
      res.json(client);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving client');
  }
});

app.put('/clients/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const client = req.body;
    client.id = id; // Adicionando ID ao objeto client
    await crudClient.update(client);
    res.send(`Client updated with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating client');
  }
});

app.delete('/clients/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await crudClient.delete(id);
    res.send(`Client deleted with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting client');
  }
});

// CRUD de Processos
const crudProcesso = new CRUDProcesso();

app.post('/processos', async (req: Request, res: Response) => {
  try {
    const processo = req.body;
    const id = await crudProcesso.create(processo);
    res.status(201).send(`Processo added with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error creating processo');
  }
});

app.get('/processos', async (req: Request, res: Response) => {
  try {
    const processos = await crudProcesso.readAll();
    res.json(processos);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving processos');
  }
});

app.get('/processos/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const processo = await crudProcesso.readOne(id);
    if (!processo) {
      res.status(404).send('Processo not found');
    } else {
      res.json(processo);
    }
  } catch (error) {
    console.error(error);
    res.status(500).send('Error retrieving processo');
  }
});

app.put('/processos/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    const processo = req.body;
    processo.id = id; // Adicionando ID ao objeto processo
    await crudProcesso.update(processo);
    res.send(`Processo updated with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error updating processo');
  }
});

app.delete('/processos/:id', async (req: Request, res: Response) => {
  try {
    const id = parseInt(req.params.id, 10);
    await crudProcesso.delete(id);
    res.send(`Processo deleted with ID ${id}`);
  } catch (error) {
    console.error(error);
    res.status(500).send('Error deleting processo');
  }
});

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});

export default app;
