import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const ProductCount = ({ state }) => {
  const data = {
    type: "bar",
    labels: state?.map((x) => x?.title),
    datasets: [
      {
        label: "Product",
        data: state?.map((x) => x?.AllOrders[0]?.count),
        backgroundColor: "blue",
        borderColor: "rgb(255,99,132)",
        borderWidth: 1,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 6,
        min: 0,
        ticks: {
          stepSize: 1,
        },
      },
    },
    legend: {
      lebels: {
        fontSize: 25,
      },
    },
    options: {
      tooltips: {
        mode: "index",
      },
    },
  };
  return (
    <div>
      <Bar height={300} width={300} data={data} options={options} />
    </div>
  );
};

export default ProductCount;
