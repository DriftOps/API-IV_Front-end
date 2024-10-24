
import React from 'react';
import Card from './card';

const CardContainer = () => {
  return (
    <div className="card-container"> {/* Contêiner para os cards */}
      <Card title="Tarefas Cumpridas" />
      <Card title="Tarefas em Processo" />
      <Card title="Tarefas pendentes" />
    </div>
  );
};

export default CardContainer;
