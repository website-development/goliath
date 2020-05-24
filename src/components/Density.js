import React from "react";
import Chart from "react-apexcharts";

class Density extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      series: this.props.series,
      options: {
        legend: {
          show: !this.props.hideLegend,
          position: "top",
          horizontalAlign: "right",
          labels: {
            colors: "#ffffff33",
          },
          markers: {
            fillColors: ["#FDD226", "#8CF4EA"],
          },
        },
        fill: {
          type: "gradient",
          gradient: {
            colorStops: [
              [
                {
                  offset: 30,
                  color: "#FDD226",
                  opacity: 0.2,
                },
                {
                  offset: 100,
                  color: "#FF5753",
                  opacity: 0.02,
                },
              ],
              [
                {
                  offset: 20,
                  color: "#8CF4EA",
                  opacity: 0.2,
                },
                {
                  offset: 200,
                  color: "#1767AC",
                  opacity: 0.02,
                },
              ],
            ],
          },
        },
        chart: {
          type: "area",
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 2,
          curve: this.props.curve || "smooth",

          colors: this.props.strokeColors || ["#FDD226", "#8CF4EA"],
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
            },
          },
          axisBorder: {
            color: "rgba(255, 255, 255, 0.1)",
          },
          axisTicks: {
            show: false,
          },
          tooltip: {
            enabled: false,
          },
        },
        yaxis: {
          labels: {
            style: {
              fontFamily: "Montserrat, Helvetica",
            },
            offsetY: 2,
          },
        },
        grid: {
          borderColor: "rgba(255, 255, 255, 0.1)",
        },
        tooltip: {},
      },
    };
  }

  render() {
    return (
      <div className={`enrichment__area density ${this.props.className || ""}`}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="area"
          height={this.props.height || "auto"}
          width={this.props.width || "100%"}
        />
      </div>
    );
  }
}

export default Density;
