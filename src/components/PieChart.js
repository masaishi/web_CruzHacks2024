import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
import { BrowserView, MobileView, isBrowser, isMobile } from 'react-device-detect';

Chart.register(ArcElement);

const data = {
  labels: ["Negative", "Neutral", "Positive"],
  datasets: [
    {
      data: [30, 20, 50],
      backgroundColor: ["#FFB3B3", "#FFD699", "#B3D9FF"],
    },
  ],
};

const colorize = (opaque, hover, ctx) => {
  const v = ctx.parsed;
  const c =
    v < -50 ? "#D60000" : v < 0 ? "#F46300" : v < 50 ? "#0358B6" : "#44DE28";

  const opacity = hover ? 1 - Math.abs(v / 150) - 0.2 : 1 - Math.abs(v / 150);

  return opaque;
};

const hoverColorize = (ctx) => {
  return colorize(false, true, ctx);
};

const options = {
  plugins: {
    legend: true,
    tooltip: false,
  },
  responsive: true, 
  maintainAspectRatio: false,
  elements: {
    arc: {
      backgroundColor: colorize.bind(null, false, false),
      hoverBackgroundColor: hoverColorize,
    },
  },
};

const PieChart = () => {
  return (
    <div style={{ width: isMobile ? '75%' : '100%' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default PieChart;
