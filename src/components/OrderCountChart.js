import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const OrderCount = ({ state }) => {
  const data = {
    labels: state?.map((x) => x?.name?.firstname),
    datasets: [
      {
        label: "sourav",
        data: state?.map((x) => x?.AllOrders[0]?.count),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 10,
        min: 0,
        ticks: {
          stepSize: 1,
        },
        title: {
          display: true,
          text: "--------Count---------",
        },
      },
      x: {
        title: {
          display: true,
          text: "---------Users--------",
        },
      },
    },
    legend: {
      lebels: {
        fontSize: 26,
      },
    },
  };
  return (
    <div style={{ height: "600px" }}>
      <Bar height={700} data={data} options={options} />
    </div>
  );
};

export default OrderCount;
