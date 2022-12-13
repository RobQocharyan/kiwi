import React from "react";
import Chart from "react-apexcharts";
import "./Exchanges.scss";

export const Exchanges = () => {
  const options = {
    title: {
      text: "Basic Column Chart",
    },
    data: [
      {
        // Change type to "doughnut", "line", "splineArea", etc.
        type: "column",
        dataPoints: [
          { label: "Gate.io", y: 10 },
          { label: "Coinbase", y: 15 },
          { label: "Binance", y: 25 },
          { label: "Huobi", y: 30 },
        ],
      },
    ],
  };
  return (
    <div className="exchanges">
      <div className="exchanges__name">
        <span>Most usable exchanges</span>

        <a href="#">See more</a>
      </div>
      <React.Fragment>
        <Chart
          type="bar"
          width={280}
          height={300}
          series={[
            {
              data: [25, 26, 39, 52],
            },
          ]}
          options={{
            colors: ["#DCCDFF"],
            theme: { mode: "light" },

            xaxis: {
              categories: ["Gate.io", "Coinbase", "Binance", "Huobi"],
            },
          }}
        ></Chart>
      </React.Fragment>
    </div>
  );
};
