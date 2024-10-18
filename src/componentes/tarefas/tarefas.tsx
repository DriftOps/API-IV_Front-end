
import React from 'react';
import './tarefas.css'; 
import Card from './card';

const Listas = () => {
    return (
        <div className="container">
            <div className="div-item">
                <Card title="Done" /> 
            </div>
            <div className="div-item">
                <Card title="Doing" /> 
            </div>
            <div className="div-item">
                <Card title="To do" />
            </div>
            <div className="Adicionar lista">
               
            </div>
        </div>
    );
};

export default Listas;
