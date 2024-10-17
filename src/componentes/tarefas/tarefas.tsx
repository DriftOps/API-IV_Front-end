import React from 'react';
import './tarefas.css'; // Certifique-se de que o caminho está correto

const Card = () => {
    return (
        <div className="card">
            {/* Header do Card */}
            <div className="card-header">
                <h2>Título da Tarefa</h2>
            </div>

            {/* Body do Card com Checkboxes */}
            <div className="card-body">
                <label>
                    <input type="checkbox" />
                    Parte 1 da Tarefa
                </label>
                <label>
                    <input type="checkbox" />
                    Parte 2 da Tarefa
                </label>
                <label>
                    <input type="checkbox" />
                    Parte 3 da Tarefa
                </label>
            </div>

            {/* Footer do Card */}
            <div className="card-footer">
                <button>Concluir</button>
                <button>Remover</button>
            </div>
        </div>
    );
};

const Tarefas: React.FC = () => {
    return (
        <div className="card-container">
            <Card />
            <Card /> {/* Adiciona um segundo card */}
            <Card />
            <Card />
        </div>
    );
};

export default Tarefas;
