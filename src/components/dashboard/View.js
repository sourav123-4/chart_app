import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const View = ({ chart }) => {
  var data = {
    labels: chart?.map((x) => x.title),
    datasets: [
      {
        label: `${chart?.length} products Available`,
        data: chart?.map((x) => x.price),
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
    scales: {},
    legend: {
      labels: {
        fontSize: 25,
      },
    },
  };

  const data2 = [
    {
      icon: "https://cdn-icons-png.flaticon.com/512/3500/3500833.png",
      name: "Orders",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "https://cdn-icons-png.flaticon.com/512/1170/1170577.png",
      name: "Products",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "https://www.citypng.com/public/uploads/small/11639594360nclmllzpmer2dvmrgsojcin90qmnuloytwrcohikyurvuyfzvhxeeaveigoiajks5w2nytyfpix678beyh4ykhgvmhkv3r3yj5hi.png",
      name: "Users",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: "https://upload.wikimedia.org/wikipedia/commons/thumb/8/84/Money_Flat_Icon.svg/1200px-Money_Flat_Icon.svg.png",
      name: "Money",
      description:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];

  return (
    <div className="view">
      <div className="view1 view2">
        <Doughnut data={data} height={400} options={options} />
      </div>
      <div className="view1">
        {data2?.map((x) => {
          return (
            <div className="data2" key={x.name}>
              <div className="abcd">
                <img height="30px" width="30px" alt="logo" src={x.icon} />
                <h3>{x.name}</h3>
              </div>
              <div className="desc">
                <p>{x.description}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="view1 view2">
        <Doughnut data={data} height={400} options={options} />
      </div>
    </div>
  );
};

export default View;
