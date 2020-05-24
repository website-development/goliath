import React from 'react';
import Chart from 'react-apexcharts';

class GroupedBars extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    
      series: [{
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }, {
        data: [43, 22, 43, 62, 23, 64, 37]
      }, {
        data: [31, 22, 30, 12, 53, 34, 12]
      }, {
        data: [44, 55, 41, 64, 22, 43, 21]
      }, {
        data: [53, 32, 33, 52, 13, 44, 32]
      }],
      options: {
        chart: {
          type: 'bar',
          height: 430
        },
        plotOptions: {
          bar: {
            horizontal: false,
            columnWidth: '55%',
            endingShape: 'rounded',
          }
        },
        dataLabels: {
          enabled: false,
          offsetX: -6,
          style: {
            fontSize: '12px',
            colors: ['#fff']
          }
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
          labels: {
            style: {
              colors: '#eeeeee33'
            }
          },
        },
        yaxis: {
          labels: {
            style: {
              colors: '#eeeeee33'
            }
          },
        },
        legend: {
          show: false
        },
        stroke: {
          show: true,
          width: 2,
          colors: ['transparent']
        },
        fill: {
          type: 'gradient',
          gradient: {
            type: 'diagonal2',
            colorStops: [
              [{
                offset: 0,
                color: "#FB3C74",
                opacity: 1
              },
              {
                offset: 50,
                color: "#E16971",
                opacity: 1
              }
            ],
            [
              {
                offset: 0,
                color: "#F27495",
                opacity: 1
              },
              {
                offset: 100,
                color: "#7471FF",
                opacity: 1
              }
            ],
            [
              {
                offset: 0,
                color: "#1767AC",
                opacity: 1
              },
              {
                offset: 100,
                color: "#8CF4EA",
                opacity: 1
              }
            ],
            [
              {
                offset: 0,
                color: "#F6C07E",
                opacity: 1
              },
              {
                offset: 100,
                color: "#F9EBA1",
                opacity: 1
              }
            ],
            [
              {
                offset: 0,
                color: "#FDD226",
                opacity: 1
              },
              {
                offset: 100,
                color: "#FF5753",
                opacity: 1
              }
            ],
            [
              {
                offset: 0,
                color: "#DDFF53",
                opacity: 1
              },
              {
                offset: 100,
                color: "#FF5753",
                opacity: 1
              }
            ],
          ]
          } 
        },
      }, 
    };
  }

  render() {
    return (
      <div className="enrichment__grouped">
        <Chart options={this.state.options} series={this.state.series} width={650} height={320} type="bar" />

        <div className="familydistribution__markers2">
          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse"></div>
            <h4 className="familydistribution__label">Number of members</h4>
          </div>

          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse "></div>
            <h4 className="familydistribution__label">Number of parents</h4>
          </div>

          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse"></div>
            <h4 className="familydistribution__label">Number of babies</h4>
          </div>

          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse"></div>
            <h4 className="familydistribution__label">Number of scholars</h4>
          </div>

          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse"></div>
            <h4 className="familydistribution__label">Number of dependents</h4>
          </div>

          <div className="familydistribution__marker secondary-colors">
            <div className="familydistribution__elipse"></div>
            <h4 className="familydistribution__label">Number of independents</h4>
          </div>
        </div>
      </div>
    );
  }
}

export default GroupedBars;