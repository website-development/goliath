import React from "react";
import Chart from "react-apexcharts";

class Donut extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      series: [3300, 3500, 6001],
      options: {
        plotOptions: {
          pie: {
            endingShape: "rounded",
            donut: {
              size: "93%",
              labels: {
                show: true,
                name: {
                  show: true,
                  fontSize: 11,
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.6)",
                  offsetY: 30,
                },
                value: {
                  show: true,
                  fontSize: 36,
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 600,
                  color: "#fff",
                  offsetY: -5,
                },
                total: {
                  label: "Treated records",
                  show: true,
                  fontSize: 11,
                  fontFamily: "Montserrat, Helvetica",
                  fontWeight: 500,
                  color: "rgba(255, 255, 255, 0.6)",
                  offsetY: 30,
                },
              },
            },
          },
        },

        chart: {
          type: "donut",
          width: 700,
          dropShadow: {
            enabled: true,
            top: 10,
            left: 3,
            blur: 5,
            opacity: 0.4,
          },
        },

        stroke: {
          show: false,
        },
        dataLabels: {
          enabled: false,
        },
        fill: {
          colors: ["#f5a55d", "#4eaacb", "#b569c9"],
        },
        legend: {
          position: "bottom",
          labels: {
            colors: "rgba(255,255,255, 0.6)",
          },
          fontFamily: "Montserrat, Helvetica",

          formatter: function (val, opts) {
            return val + " - " + opts.w.globals.series[opts.seriesIndex];
          },
          offsetY: 5,
        },
        responsive: [
          // {
          //   breakpoint: 480,
          //   options: {
          //     chart: {
          //       width: 200,
          //     },
          //     legend: {
          //       position: "bottom",
          //     },
          //   },
          // },
        ],
      },
    };
  }

  render() {
    return (
      <div style={{ display: "flex", justifyContent: "center" }}>
        <Chart
          options={this.state.options}
          series={this.state.series}
          type="donut"
          // width="120%"
        />
      </div>
    );
  }
}

export default Donut;
