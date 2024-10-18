
import React, { useState } from 'react';
import './card.css'; 

const Card = ({ title }) => {
    const [tasks, setTasks] = useState([]); 
    const [taskInput, setTaskInput] = useState(''); 

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, taskInput]);//adicionar tarefa
            setTaskInput('');
        }
    };

    return (
        <div className="card">
            <div className="card-header">
                <h3>{title}</h3>
                <button className="options-button">...</button>
            </div>
            <div className="card-content">
                <input 
                    type="text" 
                    value={taskInput} 
                    onChange={(e) => setTaskInput(e.target.value)} 
                    placeholder="Adicionar tarefa..." 
                />
                <div className="tasks-list">
                    {tasks.map((task, index) => (
                        <div key={index} className="task-item">{task}</div>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <button className="add-button" onClick={addTask}>+</button> 
                <button>Excluir</button>
            </div>
        </div>
    );
};

export default Card;
