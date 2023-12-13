// import React from 'react'
import { WiDayRain } from "react-icons/wi";
import { MainCardProps } from "../../types";
const MainCard = ({ data }: MainCardProps) => {
  console.log(data);
  let image = "night.jpg";
  // if(data.icon?.includes('n', 2))
  //   image = 'night.jpg';
  // else
  //   image = 'after_noon.jpg';
  return (
    <div className="card bg-secondary-subtle text-dark mb-4">
      <img
        src={`./../icons/${image}`}
        className="card-img"
        alt=""
        style={{
          filter: "blur(1px)",
          objectFit: "cover",
          height: "28rem",
          opacity: "0.7",
        }}
      />
      <div className="card-img-overlay">
        <h5 className="card-title"> {data.location} </h5>
        <div className="card-body">
            <div className="row">
              <div className="col-4">
                <h5 className="text-info text-bold"> {data.weather} </h5>
              </div>
              <div className="col-4">
                <h5> {data.valid_date} </h5>
              </div>
            </div>
            <div className="row">
              <div className="col-4">
                <img src={`./../icons/${data.icon}.png`} alt="" />
              </div>
              <div className="col-4">
                <div className="row">
                  <h5 className="text-info">
                    {data.max_temp}° /{data.min_temp}°
                  </h5>
                </div>
                <div className="row">
                  <h5 className="text-warning">{data.curr_temp}°</h5>
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
        {/* <img src={`./../icons/${data.icon}.png`} alt="" /> */}
      </div>
    </div>
  );
};

export default MainCard;
