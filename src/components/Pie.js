import React from 'react';
import { Pie } from 'react-chartjs-2';
import jsonData from '../constants/pie_chart.json'

const PieChart = (props) => {

  const data = {
    labels: jsonData.map(data => `${data.store} on ${data.month}`),
    datasets: [
      {
        label: 'Customers',
        data: jsonData.map(data => data.customer),
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  console.log(jsonData)

  return (
    <div>
    <div className='header pb-1'>
      <h1 className='title'>Pie Chart</h1>
    </div>
    <Pie data={data} />
  </div>
  )
}

export default PieChart;
