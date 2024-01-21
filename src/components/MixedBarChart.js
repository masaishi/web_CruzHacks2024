import { Chart, registerables } from "chart.js";
import React from "react";
import { Bar } from "react-chartjs-2";
import { isMobile } from "react-device-detect";

Chart.register(...registerables);

const data = {
  labels: ["Category 1", "Category 2", "Category 3", "Category 4"],
  datasets: [
    {
      label: "Positive",
      data: [30, 20, 50, 40],
      backgroundColor: "#B3D9FF",
      yAxisID: "A", // Assign the dataset to y-axis 'A'
      xAxisID: "B", // Assign the dataset to x-axis 'B'
    },
    {
      label: "Negative",
      data: [20, 10, 30, 25],
      backgroundColor: "#FFB3B3",
      yAxisID: "A", // Assign the dataset to y-axis 'A'
      xAxisID: "B", // Assign the dataset to x-axis 'B'
    },
  ],
};

const colorize = (opaque, hover, ctx) => {
  const v = ctx.parsed;
  const opacity = hover ? 0.8 : 1;
  return `rgba(255, 255, 255, ${opacity})`;
};

const hoverColorize = (ctx) => {
  return colorize(false, false, ctx);
};

const options = {
  plugins: { legend: { position: "bottom" }, tooltip: false },
  responsive: true,
  maintainAspectRatio: !isMobile,
  scales: {
    x: {
      type: "linear",
      position: "bottom",
      stacked: true,
      id: "B", // Assign the x-axis to id 'B'
    },
    y: {
      type: "category",
      stacked: true,
      id: "A", // Assign the y-axis to id 'A'
    },
  },
  elements: {
    bar: {
      backgroundColor: colorize.bind(null, false, false),
      hoverBackgroundColor: hoverColorize,
    },
  },
};

const MixedBarChart = () => {
  return (
    <div style={{ width: isMobile ? "75%" : "100%" }}>
      <Bar data={data} options={options} />
    </div>
  );
};

export default MixedBarChart;
