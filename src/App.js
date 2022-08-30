import React from "react";
import { Chart } from "react-charts";

function App() {
  const data = React.useMemo(
    () => [
      {
        label: "Series 1",
        data: [
          [0, 1],
          [1, 2],
          [2, 4],
          [3, 2],
          [4, 7],
        ],
      },
      {
        label: "Series 2",
        data: [
          [0, 3],
          [1, 1],
          [2, 5],
          [3, 6],
          [4, 4],
        ],
      },
    ],
    []
  );

  const axes = React.useMemo(
    () => [
      { primary: true, type: "linear", position: "bottom" },
      { type: "linear", position: "left" },
    ],
    []
  );
  React.useEffect(() => {
    // const fetchData = () =>
    //   fetch("http://localhost:8080/order", {
    //     method: "GET",
    //     mode: "no-cors",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //   })
    //     .then((res) => console.log("res", res))
    //     .catch((err) => console.log(err));
    fetchData();
  }, []);
  // const fetchData = async () => {
  //   try {
  //     const res = await fetch(`http://localhost:8080/order`);
  //     const data = await res.json();
  //     console.log("data", data);
  //     return data;
  //   } catch (err) {
  //     console.log(err);
  //   }
  // };
  const fetchData = () =>
    fetch("http://localhost:8080/order", {
      method: "GET",
      mode: "no-cors",
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          return response
            .text()
            .then((result) => Promise.reject(new Error(result)));
        }

        return response.json();
      })
      .then((data) => console.log("data", data))
      // .then((data) => {
      //   console.log(data);
      //   return new Promise((resolve, reject) => {
      //     resolve(data ? JSON.parse(data) : {});
      //   });
      // })
      .catch((err) => console.log(err));
  // fetchData();
  return (
    <div
      style={{
        width: "800px",
        height: "600px",
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  );
}

export default App;
