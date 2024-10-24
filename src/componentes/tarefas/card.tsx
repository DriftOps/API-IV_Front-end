import React, { useState, useEffect } from 'react';
import './card.css'; 

const Card = ({ title }) => {
    const [tasks, setTasks] = useState(() => {
        // Recupera as tarefas do localStorage ao inicializar o estado
        const savedTasks = localStorage.getItem(title);
        return savedTasks ? JSON.parse(savedTasks) : [];
    }); 
    const [taskInput, setTaskInput] = useState(''); 
    const [selectedTasks, setSelectedTasks] = useState(new Set());

    // Salva as tarefas no localStorage sempre que elas mudam
    useEffect(() => {
        localStorage.setItem(title, JSON.stringify(tasks));
    }, [tasks, title]);

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
    };

    const toggleTaskSelection = (task) => {
        const newSelectedTasks = new Set(selectedTasks);
        if (newSelectedTasks.has(task)) {
            newSelectedTasks.delete(task);
        } else {
            newSelectedTasks.add(task);
        }
        setSelectedTasks(newSelectedTasks);
    };

    const deleteSelectedTasks = () => {
        const newTasks = tasks.filter(task => !selectedTasks.has(task));
        setTasks(newTasks);
        setSelectedTasks(new Set());
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
                        <div 
                            key={index} 
                            className={`task-item ${selectedTasks.has(task) ? 'selected' : ''}`}
                            onClick={() => toggleTaskSelection(task)}
                        >
                            {task}
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <button className="add-button" onClick={addTask}>+</button> 
                <button onClick={deleteSelectedTasks}>Excluir</button>
            </div>
        </div>
    );
};

export default Card;
