import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, BarElement, Tooltip, Legend, CategoryScale, LinearScale } from 'chart.js';
import './Estatistica.css';

ChartJS.register(BarElement, Tooltip, Legend, CategoryScale, LinearScale);

const Estatistica: React.FC = () => {
    // Dados individuais para cada setor
    const dataComercial = {
        labels: ['Trim1', 'Trim2', 'Trim3', 'Trim4'],
        datasets: [
            {
                label: 'Comercial',
                data: [120000, 140000, 130000, 150000],
                backgroundColor: '#FF6384',
            },
        ],
    };

    const dataOperacional = {
        labels: ['Trim1', 'Trim2', 'Trim3', 'Trim4'],
        datasets: [
            {
                label: 'Operacional',
                data: [100000, 110000, 120000, 115000],
                backgroundColor: '#4BC0C0',
            },
        ],
    };

    const dataFinanceiro = {
        labels: ['Trim1', 'Trim2', 'Trim3', 'Trim4'],
        datasets: [
            {
                label: 'Financeiro',
                data: [80000, 95000, 90000, 100000],
                backgroundColor: '#FF9F40',
            },
        ],
    };

    const dataRH = {
        labels: ['Trim1', 'Trim2', 'Trim3', 'Trim4'],
        datasets: [
            {
                label: 'Recursos Humanos',
                data: [60000, 70000, 75000, 72000],
                backgroundColor: '#9966FF',
            },
        ],
    };

    return (
        <div>
            <h1 className="page-title">Quantidade de Tarefas Completas:</h1>
            <div className="graph-row">
                <div className="graph-container">
                    <h2>Comercial</h2>
                    <Bar data={dataComercial} />
                </div>
                <div className="graph-container">
                    <h2>Operacional</h2>
                    <Bar data={dataOperacional} />
                </div>
                <div className="graph-container">
                    <h2>Financeiro</h2>
                    <Bar data={dataFinanceiro} />
                </div>
                <div className="graph-container">
                    <h2>Recursos Humanos</h2>
                    <Bar data={dataRH} />
                </div>
            </div>
        </div>
    );
};

export default Estatistica;
