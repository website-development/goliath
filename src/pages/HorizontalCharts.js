import React from 'react';
import Chart from 'react-apexcharts'

class Bar extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [{
        data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380, 650, 750, 300]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 350,

        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            opacityFrom: 0.7,
            opacityTo: 0.9,
            colorStops: [
              {
                offset: 0,
                color: "#95DA74",
                opacity: 1
              },
              {
                offset: 20,
                color: "#61DBC3",
                opacity: 1
              },
              {
                offset: 60,
                color: "#FAD375",
                opacity: 1
              },
              {
                offset: 100,
                color: "#EB656F",
                opacity: 1
              }
            ]
          } 
        },
        plotOptions: {
          bar: {
            horizontal: true,
            barHeight: '14%',
            endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false
        },
        xaxis: {
          categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
            'United States', 'China', 'Germany', 'Ukraine', 'Russia', 'Moldova'
          ],
        },
        grid: {
          show: true,
          borderColor: '#90A4AE',
          strokeDashArray: 0,
          position: 'back',
          xaxis: {
              lines: {
                  show: true
              }
          },   
          yaxis: {
              lines: {
                  show: false
              }
          },  
        }
      },
    };
  }



  render() {
    return (
      

<div id="chart">
  <Chart options={this.state.options} series={this.state.series} type="bar" height={890} />
</div>)}}

export default Bar