import React from "react";
import {
  Chart as ChartJs,
  BarElement,
  CategoryScale,
  LinearScale,
} from "chart.js";
import { Bar } from "react-chartjs-2";

ChartJs.register(CategoryScale, LinearScale, BarElement);

const OrderAmount = ({ state }) => {
  const data = {
    labels: state?.map((x) => x.username),
    datasets: [
      {
        label: "Order By Amount",
        data: state?.map((x) => x?.AllOrders[0]?.TotalAmount),
        backgroundColor: [
          // "rgba(0,0,255)",
          // "rgba(0,0,255)",
          "rgb(121, 40, 202)",
          // "rgb(121, 40, 202)",
          "rgb(255, 0, 128)",
          // "rgb(205, 0, 128)",
        ],
        borderWidth: 1,
      },
    ],
  };
  var options = {
    maintainAspectRatio: false,
    scales: {
      y: {
        max: 100000,
        min: 0,
        ticks: {
          stepSize: 5000,
        },
        title: {
          display: true,
          text: "--------money---------",
        },
      },
      x: {
        title: {
          display: true,
          text: "---------users--------",
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
    <div>
      <Bar height={350} width={970} data={data} options={options} />
    </div>
  );
};

export default OrderAmount;
