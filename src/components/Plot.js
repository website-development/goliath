import React from "react";
import Chart from "react-apexcharts";

class Plot extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          name: "Likes",
          data: [4, 3, 10, 9, 29, 19, 22],
        },
        {
          name: "Data type",
          data: [22, 56, 10, 88, 29, 91, 12],
        },
      ],
      options: {
        legend: {
          show: !this.props.hideLegend,
          position: "top",
          horizontalAlign: "right",
          floating: true,
          labels: {
            colors: "rgba(255, 255, 255, 0.6)",
          },
          markers: {
            fillColors: ["#FDD226", "#FF5753"],
            offsetY: 2,
          },
        },
        fill: {
          opacity: 0,
          type: "gradient",
          gradient: {
            colorStops: [
              [
                {
                  offset: 0,
                  color: "#FDD226",
                  opacity: 0,
                },
                {
                  offset: 50,
                  color: "transparent",
                  opacity: 0,
                },
              ],
              [
                {
                  offset: 0,
                  color: "#FF5753",
                  opacity: 0,
                },
                {
                  offset: 50,
                  color: "transparent",
                  opacity: 0,
                },
              ],
            ],
          },
        },
        chart: {
          height: 350,
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: this.props.curve || "smooth",
          colors: ["#FDD226", "#FF5753"],
          dashArray: this.props.isDashed && [0, 8],
        },
        xaxis: {
          type: "datetime",
          categories: [
            "2018-09-19T00:00:00.000Z",
            "2018-09-19T01:30:00.000Z",
            "2018-09-19T02:30:00.000Z",
            "2018-09-19T03:30:00.000Z",
            "2018-09-19T04:30:00.000Z",
            "2018-09-19T05:30:00.000Z",
            "2018-09-19T06:30:00.000Z",
          ],
          labels: {
            style: {
              fontFamily: "Montserrat, Helvetica",
              colors: "rgba(255, 255, 255, 0.6)",
            },
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        tooltip: {
          x: {
            format: "dd/MM/yy HH:mm",
          },
        },
        grid: {
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
      },
    };
  }

  render() {
    return (
      <div className="plot">
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
        />
      </div>
    );
  }
}

export default Plot;
