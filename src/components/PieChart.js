import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { isMobile } from "react-device-detect";

Chart.register(ArcElement);

const data = {
  labels: ["Negative", "Neutral", "Positive"],
  datasets: [
    { data: [30, 20, 50], backgroundColor: ["#FFB3B3", "#FFD699", "#B3D9FF"] },
  ],
};

const colorize = (opaque, hover, ctx) => {
  const v = ctx.parsed;
  const opacity = hover ? 0.8 : 1; // Adjust opacity based on hover condition
  return `rgba(255, 255, 255, ${opacity})`;
};

const hoverColorize = (ctx) => {
  return colorize(false, false, ctx);
};

const options = {
  plugins: { legend: true, tooltip: false },
  responsive: true,
  maintainAspectRatio: !isMobile,
  elements: {
    arc: {
      backgroundColor: colorize.bind(null, false, false),
      hoverBackgroundColor: hoverColorize,
    },
  },
};

const PieChart = () => {
  return (
    <div style={{ width: isMobile ? "75%" : "100%" }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
