import React from "react";
import Chart from "react-apexcharts";

const options = {
  series: [
    {
      name: "PRODUCT A",
      data: [44, 55, 41, 67, 22, 43, 10, 50, 40, 25, 10, 60, 50],
    },
    {
      name: "PRODUCT B",
      data: [13, 23, 20, 8, 13, 27, 10, 20, 35, 10, 24, 41, 18],
    },
  ],
  chart: {
    type: "bar",
    height: 340,
    stacked: true,
    toolbar: {
      show: true,
    },
    zoom: {
      enabled: true,
    },
  },
  dataLabels: {
    enabled: false,
  },
  responsive: [
    {
      breakpoint: 480,
      options: {
        legend: {
          position: "bottom",
          offsetX: -10,
          offsetY: 0,
        },
      },
    },
  ],
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: "10%",
      endingShape: "rounded",
    },
  },
  xaxis: {
    type: "category",
    categories: [
      "0",
      "0.05",
      "0.1",
      "0.15",
      "0.2",
      "0.25",
      "0.3",
      "0.35",
      "0.4",
      "0.45",
      "0.5",
      "0.55",
      "0.6",
      "0.65",
    ],
    labels: {
      style: {
        colors: "rgba(255, 255, 255, 0.6)",
        fontFamily: "Montserrat, Helvetica",
      },
    },
    axisTicks: {
      show: false,
    },
  },
  yaxis: {
    labels: {
      style: {
        colors: "rgba(255, 255, 255, 0.6)",
        fontFamily: "Montserrat, Helvetica",
      },
    },
  },
  legend: {
    position: "bottom",
    offsetY: 5,
    labels: {
      colors: "rgba(255, 255, 255, 0.6)",
      fontFamily: "Montserrat, Helvetica",
    },
    markers: {
      fillColors: ["#FF5753", "#fdd226"],
    },
  },
  fill: {
    opacity: 1,
    colors: ["#FF5753", "#fdd226"],
  },
  grid: {
    borderColor: "rgba(255, 255, 255, 0.1)",
  },
};

const Histogram = () => {
  return (
    <div className="enrichment__hist">
      <Chart options={options} series={options.series} type="bar" />
    </div>
  );
};

export default Histogram;
