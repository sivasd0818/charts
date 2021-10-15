import React from 'react';
import { Line } from 'react-chartjs-2';
import jsonData from '../constants/line_chart.json'

const LineChart = (props) => {

  const data = {
    labels: jsonData.map(data => data.year),
    datasets: [
      {
        label: 'Customer',
        data: jsonData.map(data => data.customer),
        fill: false,
        backgroundColor: 'rgb(255, 99, 132)',
        borderColor: 'rgba(255, 99, 132, 0.2)',
      },
    ],
  };
  
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Year",
        }
      },
      y: {
          ticks: {
            beginAtZero: true,
          },
          title: {
            display: true,
            text: "Customer",
          }
      },
    },
  };

  return (
    <div>
    <div className='header pb-1'>
      <h1 className='title'>Line Chart</h1>
    </div>
    <Line data={data} options={options} />
  </div>
  )
}

export default LineChart;
