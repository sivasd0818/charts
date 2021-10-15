import React from 'react';
import { Scatter } from 'react-chartjs-2';
import jsonData from '../constants/scatter_plot.json'
import moment from 'moment'


const ScatterChart = (props) => {

  const data = {
    datasets: [
      {
        label: 'Store count',
        data: jsonData.map(data => {
          return {
            x : new Date(`${data.year}-${data.month}-${data.date}`),
            y : data.store_count
          }
        }),
        backgroundColor: 'rgba(255, 99, 132, 1)',
      },
    ],
  };
  
  const options = {
    plugins: {
      tooltip: {
        callbacks: {
          title: tooltipItems => {
            let title = tooltipItems[0].parsed.x
            if (title !== null) {
              title = moment(title).format('MMM DD, yyyy')
            }
            return title
          },
          label: function(tooltipItem) {
            var label = "" ;
            if (tooltipItem.dataset.label && tooltipItem.parsed.y) {
                label = `${tooltipItem.dataset.label} : ${tooltipItem.parsed.y}`;
            }
            return label;
          }
        }
      }
    },
    scales: {
      x: {
        ticks : {
          callback : (value, index, values) => {
            return moment(value).format('MMM DD, yyyy')
          }
        },
        title: {
          display: true,
          text: "Date",
        }
      },
      y : {
        ticks : {
          beginAtZero : true
        },
        title: {
          display: true,
          text: "Store Count",
        }
      }
    },
  };

  return (
    <div>
      <div className='header pb-1'>
        <h1 className='title'>Scatter Chart</h1>
      </div>
      <Scatter data={data} options={options} />
    </div>
  )
}

export default ScatterChart;
