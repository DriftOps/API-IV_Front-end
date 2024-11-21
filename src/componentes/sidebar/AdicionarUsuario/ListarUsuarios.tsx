import React, { useEffect, useState } from 'react';
import './ListarUsuarios.css';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  tipoUsuario: string;
  dataNascimento: string;
  email: string;
}

const ListarUsuarios: React.FC = () => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);
  const [error, setError] = useState<string | null>(null); // Estado para erros

  // Função para carregar os dados dos funcionários
  useEffect(() => {
    const fetchFuncionarios = async () => {
      try {
        // Caminho para o arquivo dentro da pasta 'public'
        const response = await fetch('/Lista-de-Usuarios.txt');

        if (!response.ok) {
          throw new Error('Erro ao carregar o arquivo.');
        }

        const data = await response.text();
        
        // Debug: Verifique o que está sendo carregado
        console.log(data);
        
        // Tente converter as linhas em JSON
        const funcionariosArray = data.split('\n').map((line) => {
          try {
            return JSON.parse(line.trim());
          } catch (err) {
            console.error('Erro ao parsear linha:', line, err);
            return null;
          }
        }).filter((item) => item !== null);

        setFuncionarios(funcionariosArray);
      } catch (error) {
        setError('Erro ao carregar funcionários');
        console.error("Erro ao carregar funcionários:", error);
      }
    };
    
    fetchFuncionarios();
  }, []);

  return (
    <div className="listar-usuarios-container">
      <h2>Lista de Funcionários</h2>
      {error && <p>{error}</p>} {/* Exibe mensagem de erro */}
      {funcionarios.length > 0 ? (
        <ul>
          {funcionarios.map((funcionario) => (
            <li key={funcionario.id}>
              <strong>{funcionario.nome}</strong> - {funcionario.tipoUsuario} - {funcionario.email}
            </li>
          ))}
        </ul>
      ) : (
        <p>Nenhum funcionário cadastrado.</p>
      )}
    </div>
  );
};

export default ListarUsuarios;
