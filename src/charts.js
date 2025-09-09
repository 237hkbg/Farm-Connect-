import React from 'react';
import { Line, Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export function SalesLineChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Août', 'Sep'],
    datasets: [
      {
        label: 'Ventes (FCFA)',
        data: [12000, 18000, 15000, 22000, 30000, 25000, 27000, 32000, 25000],
        borderColor: '#388e3c',
        backgroundColor: 'rgba(56,142,60,0.15)',
        tension: 0.4,
        fill: true,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Évolution des ventes mensuelles' },
    },
  };
  return <Line data={data} options={options} />;
}

export function GainsBarChart() {
  const data = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Août', 'Sep'],
    datasets: [
      {
        label: 'Gains (FCFA)',
        data: [5000, 9000, 7000, 12000, 18000, 15000, 17000, 21000, 16000],
        backgroundColor: '#ffd600',
        borderColor: '#388e3c',
        borderWidth: 2,
      },
    ],
  };
  const options = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Gains mensuels' },
    },
  };
  return <Bar data={data} options={options} />;
}
