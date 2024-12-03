import React, { createContext, useContext, useState } from 'react';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  setor: string;
  dataNascimento: string;
  email: string;
}

interface FuncionarioContextData {
  funcionarios: Funcionario[];
  adicionarFuncionario: (funcionario: Funcionario) => void;
}

const FuncionarioContext = createContext<FuncionarioContextData | undefined>(undefined);

export const FuncionarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>([]);

  const adicionarFuncionario = (funcionario: Funcionario) => {
    setFuncionarios((funcionariosAtuais) => [...funcionariosAtuais, funcionario]);
  };

  return (
    <FuncionarioContext.Provider value={{ funcionarios, adicionarFuncionario }}>
      {children}
    </FuncionarioContext.Provider>
  );
};

export const useFuncionario = (): FuncionarioContextData => {
  const context = useContext(FuncionarioContext);
  if (!context) {
    throw new Error('useFuncionario deve ser usado dentro de um FuncionarioProvider');
  }
  return context;
};
