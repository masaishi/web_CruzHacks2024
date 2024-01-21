import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement } from 'chart.js';
import { isMobile } from 'react-device-detect';
import annotationPlugin from 'chartjs-plugin-annotation';

Chart.register(ArcElement, annotationPlugin);

const defaultData = {
  labels: ['Negative', 'Neutral', 'Positive'],
  datasets: [
    { data: [0, 100, 0], backgroundColor: ['#FFB3B3', '#FFD699', '#B3D9FF'] },
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

const PieChart = (props) => {
  let data = props.selectedWord;
  if (Object.keys(data).length === 0) {
    return (
      <div style={{ width: isMobile ? '75%' : '100%' }}>
        <Doughnut data={defaultData} options={options} />
      </div>
    );
  }
  console.log('after data', data);
  let positive_freq =
    (data['positive_freq'] / (data['positive_freq'] + data['negative_freq'])) *
    100;
  let negative_freq =
    (data['negative_freq'] / (data['positive_freq'] + data['negative_freq'])) *
    100;
  let doughnut_data = {
    labels: ['Negative', 'Neutral', 'Positive'],
    datasets: [
      {
        data: [positive_freq, 0, negative_freq],
        backgroundColor: ['#33eb91', '#FFD699', '#ff1744'],
      },
    ],
  };
  let doughnut_options = {
    plugins: {
      annotation: {
        annotations: {
          values_annotation: {
            type: 'label',
            xValue: 0,
            yAdjust: 25,
            content: data['positive_freq'],
            color: '#4caf50',
            font: {
              size: 25,
            },
          },
          values_annotation2: {
            type: 'label',
            xValue: 0,
            yAdjust: -25,
            content: data['negative_freq'],
            color: '#ff1744',
            font: {
              size: 25,
            },
          },
        },
      },
    },
  };
  return (
    <div style={{ width: isMobile ? '75%' : '100%' }}>
      <Doughnut data={doughnut_data} options={doughnut_options} />
    </div>
  );
};

export default PieChart;
