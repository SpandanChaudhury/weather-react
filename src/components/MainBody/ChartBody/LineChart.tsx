import React from "react";
import { Line } from "react-chartjs-2";
function LineChart({
  chartData,
  header,
  title,
  yLabel,
  xLabel
}: {
  chartData: any;
  header: string;
  title: string;
  yLabel: string;
  xLabel: string;
}) {
  console.log(chartData);
  return (
    <div className="chart-container">
      <h2 className="text-center text-warning"> {header} </h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: `${title}`,
              color: "white",
              font: {
                size: 16,
                family: "Andale Mono monospace",
              },
            },
            legend: {
              display: true,
              labels: {
                color: 'black',
                font: {
                    size: 15
                }
              }
            },
            
          },
          scales: {
            x: {
              title: {
                text: `${xLabel}`,
                display: true,
                color: "#1b2101",
                font: {
                  size: 17,
                  weight: "bold",
                },
              },
              ticks: {
                color: "black",
              },
              grid: {
                color: "#170e45",
                // display: false
              },
            },
            y: {
              ticks: {
                color: "black",
              },
              grid: {
                color: "#170e45",
              },
              title: {
                text: `${yLabel}`,
                display: true,
                color: '#1b2101',
                font: {
                  size: 17,
                  weight: "bold",
                },
              },
            },
          },
          
        }}
      />
    </div>
  );
}
export default React.memo(LineChart);
