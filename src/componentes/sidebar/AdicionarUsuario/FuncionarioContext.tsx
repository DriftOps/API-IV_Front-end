import React, { createContext, useContext, useState } from 'react';

interface Funcionario {
  id: string;
  nome: string;
  cpf: string;
  setor: string;
  dataNascimento: string;
  email: string;
}

interface FuncionarioContextProps {
  funcionarios: Funcionario[];
  addFuncionario: (funcionario: Funcionario) => void;
  deleteFuncionario: (id: string) => void;
  updateFuncionario: (id: string, updatedFuncionario: Funcionario) => void;
}

const FuncionarioContext = createContext<FuncionarioContextProps | undefined>(undefined);

export const FuncionarioProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [funcionarios, setFuncionarios] = useState<Funcionario[]>(JSON.parse(localStorage.getItem('funcionarios') || '[]'));

  const addFuncionario = (funcionario: Funcionario) => {
    setFuncionarios((prev) => {
      const updatedFuncionarios = [...prev, funcionario];
      localStorage.setItem('funcionarios', JSON.stringify(updatedFuncionarios));
      return updatedFuncionarios;
    });
  };

  const deleteFuncionario = (id: string) => {
    setFuncionarios((prev) => {
      const updatedFuncionarios = prev.filter((func) => func.id !== id);
      localStorage.setItem('funcionarios', JSON.stringify(updatedFuncionarios));
      return updatedFuncionarios;
    });
  };

  const updateFuncionario = (id: string, updatedFuncionario: Funcionario) => {
    setFuncionarios((prev) => {
      const updatedList = prev.map((func) => (func.id === id ? updatedFuncionario : func));
      localStorage.setItem('funcionarios', JSON.stringify(updatedList));
      return updatedList;
    });
  };

  return (
    <FuncionarioContext.Provider value={{ funcionarios, addFuncionario, deleteFuncionario, updateFuncionario }}>
      {children}
    </FuncionarioContext.Provider>
  );
};

export const useFuncionario = (): FuncionarioContextProps => {
  const context = useContext(FuncionarioContext);
  if (!context) {
    throw new Error('useFuncionario must be used within a FuncionarioProvider');
  }
  return context;
};
