import React, { useState } from 'react';
import Card from './card';
import './tarefas.css'; 

const CardContainer = () => {
    const [taskData, setTaskData] = useState({
        "Tarefas Cumpridas": [],
        "Tarefas em Processo": [],
        "Tarefas pendentes": [],
    });

    const handleDropTask = (task, source, target) => {
        setTaskData((prevData) => {
            const newSourceTasks = prevData[source].filter((t) => t !== task);
            const newTargetTasks = [...prevData[target], task];

            return {
                ...prevData,
                [source]: newSourceTasks,
                [target]: newTargetTasks,
            };
        });
    };

    return (
        <div className="card-container">
            {Object.keys(taskData).map((title) => (
                <Card 
                    key={title} 
                    title={title} 
                    tasks={taskData[title]}
                    onDropTask={handleDropTask}
                />
            ))}
        </div>
    );
};

export default CardContainer;
