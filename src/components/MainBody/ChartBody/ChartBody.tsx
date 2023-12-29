import React, { useEffect, useState } from "react";
import { CategoryScale } from "chart.js";
import { Chart } from "chart.js/auto";
import LineChart from "./LineChart";
import { RequiredData } from "../../../types";
import { useAppSelector } from "../../../store/typedHooks";

Chart.register(CategoryScale);

const ChartBody = ({ data }: { data: RequiredData[] }) => {
  //   console.log(data);
  //   console.log(typeof data);
    let days = useAppSelector((state) => state.forecast.days);
    // if(typeof days !== 'number')
    //     days = Number(days);
    // let days = 5;
  let temperatureData, humidData, labels;
  const [tempData, setTempData] = useState({});
  const [humidityData, setHumidityData] = useState({});
  
  console.log(days);

  // const [maxState, setMaxState] =
  // const [minState, setMinState] = useState([keys.map((key : string) => data[parseInt(key)].min_temp)]);
  useEffect(() => {
    console.log("running");
    if (data) {
      const keys = Object.keys(data.slice(0, days));
      console.log(keys);

      labels = keys.map((key: string) => data[parseInt(key)].valid_date);

      const max_temp = keys.map((key: string) => data[parseInt(key)].max_temp);
      const min_temp = keys.map((key: string) => data[parseInt(key)].min_temp);
      const humidity = keys.map((key: string) => data[parseInt(key)].humidity);

      temperatureData = {
        labels: labels,
        datasets: [
          {
            label: "Max Temp",
            data: max_temp,
            backgroundColor: ["red"],
            borderColor: "#ed0b07",
            borderWidth: 1,
          },
          {
            label: "Min Temp",
            data: min_temp,
            backgroundColor: ["blue"],
            borderColor: "#110596",
            borderWidth: 1,
          },
        ],
      };

      humidData = {
        labels: labels,
        datasets: [
          {
            label: "Relative Humidity",
            data: humidity,
            backgroundColor: ["#d9c0a0"],
            borderColor: "black",
            borderWidth: 1,
          },
        ],
      };
      setTempData({ ...temperatureData });
      setHumidityData({ ...humidData });
    }
  }, [data, days]);

  // setTempData();
  // useEffect(() => {

  // }, [data])

  return (
    <div className="row m-4">
      <div className="col-md-12 col-lg-6">
        {Object.keys(tempData).length > 0 && (
          <LineChart
            chartData={tempData}
            header="Max-Min Temp"
            title="Max-Min Temp through the time period"
            xLabel="DATE"
            yLabel="TEMPERATURE"
          ></LineChart>
        )}
      </div>
      <div className="col-md-12 col-lg-6">
        {Object.keys(humidityData).length > 0 && (
          <LineChart
            chartData={humidityData}
            header="Relative Humidity"
            title="Relative Humidity"
            xLabel="DATE"
            yLabel="RELATIVE HUMIDITY(%)"
          ></LineChart>
        )}
      </div>
    </div>
  );
};

export default React.memo(ChartBody);
