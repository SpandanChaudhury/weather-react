import React from "react";
import "./styles.css";
import { RequiredData } from "../../types";
const ForecastCard = (data: RequiredData) => {
  console.log(data);

  return (
    <div className="card" id="frost" style={{ minWidth: "30%" }}>
      <div className="card-body" id="frost-body">
        <div className="row">
          <div className="col-6">
            <p className=""> {data.weather} </p>
          </div>
          <div className="col-6">
            <h5> {data.valid_date} </h5>
          </div>
        </div>
        <div className="row">
          <div className="col-6">
            <img src={`./../icons/${data.icon}.png`} alt="" />
          </div>
          <div className="col-6">
            <div className="row">
              <h4 className="text-warning">{data.curr_temp}°</h4>
            </div>
            <div className="row">
              <h5 className="text-white">
                {data.max_temp}°/{data.min_temp}°
              </h5>
            </div>
            <div className="row">
              <p>Wind {data.wind_speed}m/s</p>
            </div>
            <div className="row">
              <p>Precip {data.precipitation}%</p>
            </div>
          </div>
        </div>
        {/* <h3 className="card-text"> {data.weather}</h3> */}
        {/* <h1 className="card-text"> {data.max_temp}°</h1> */}
      </div>
    </div>
  );
};

export default ForecastCard;
