import React from 'react';
import { Pie, Bar } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import './Estatistica.css';


ChartJS.register(ArcElement, Tooltip, Legend, BarElement, CategoryScale, LinearScale);

const Estatistica: React.FC = () => {
    const pieData1 = {
        labels: ['Parte 1', 'Parte 2', 'Parte 3', 'Parte 4', 'Parte 5'],
        datasets: [
            {
                label: 'Distribuição 1',
                data: [20, 30, 25, 15, 10],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
                borderWidth: 1,
            },
        ],
    };

    const pieData2 = {
        labels: ['A', 'B', 'C', 'D', 'E'],
        datasets: [
            {
                label: 'Distribuição 2',
                data: [10, 20, 15, 25, 30],
                backgroundColor: [
                    '#FF6384',
                    '#36A2EB',
                    '#FFCE56',
                    '#4BC0C0',
                    '#9966FF',
                ],
                borderWidth: 1,
            },
        ],
    };

    const barData = {
        labels: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio'],
        datasets: [
            {
                label: 'Gráfico de Barras',
                data: [12, 19, 3, 5, 2],
                backgroundColor: '#4BC0C0',
            },
        ],
    };

    return (
        <div>
            <h1>Página de Estatísticas</h1>
            <p>Aqui estão suas estatísticas:</p>

            <div className="graph-row">
                <div className="graph-container">
                    <h2>Departamento 1</h2>
                    <Pie data={pieData1} />
                </div>

                <div className="graph-container">
                    <h2>Departamento 2</h2>
                    <Pie data={pieData2} />
                </div>
            </div>

            <div className="graph-container">
                <h2>Departamento 3</h2>
                <Bar data={barData} />
            </div>
        </div>
    );
};

export default Estatistica;
