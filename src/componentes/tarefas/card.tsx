import React, { useState, useEffect } from 'react';
import './card.css'; 

const Card = ({ title, tasks, onDropTask }) => { 
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput) {
            onDropTask(taskInput, title, title); 
            setTaskInput('');
        }
    };

    const handleDragStart = (task) => (event) => {
        event.dataTransfer.setData('text/plain', task);
        event.dataTransfer.setData('source', title); 
    };

    const handleDrop = (event) => {
        event.preventDefault();
        const task = event.dataTransfer.getData('text/plain');
        const source = event.dataTransfer.getData('source');

        if (source !== title) {
            onDropTask(task, source, title);
        }
    };

    const handleDragOver = (event) => {
        event.preventDefault();
    };

    return (
        <div className="card" onDrop={handleDrop} onDragOver={handleDragOver}>
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
                            className="task-item"
                            draggable
                            onDragStart={handleDragStart(task)}
                        >
                            {task}
                        </div>
                    ))}
                </div>
            </div>
            <div className="card-footer">
                <button className="add-button" onClick={addTask}>+</button> 
            </div>
        </div>
    );
};

export default Card;
