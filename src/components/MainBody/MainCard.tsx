// import React from 'react'
import { MainCardProps } from "../../types";
import useTime from "./hooks/useTime";
const MainCard = ({ data }: MainCardProps) => {
  // console.log(time);
  const time = useTime();
  let image = "night.jpg";
  if(parseInt(time.slice(0, 2)) > 18 )
    image = 'night.jpg';
  else
    image = 'day.jpg';
  return (
    <div className="card bg-secondary-subtle text-dark mb-4">
      <img
        src={`./../icons/${image}`}
        className="card-img"
        alt=""
        style={{
          filter: "blur(5px)",
          objectFit: "cover",
          height: "28rem",
          opacity: "0.7",
        }}
      />
      <div className="card-img-overlay">
        <div className="card-body">
          <div className="row text-center align-items-end p-5 mt-5">
            <div className="col-4">
              <div className="row mb-5 pb-3">
                <h2 className="" style={{ color: "#660033" }}>
                  {data.location}
                </h2>
              </div>
              <div className="row">
                <h5> {data.valid_date} </h5>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <img
                  className="mx-auto"
                  src={`./../icons/${data.icon}.png`}
                  alt=""
                  style={{ width: "13rem", height: "12rem" }}
                />
              </div>
              <div className="row text-center">
                <h5 className="" style={{ color: "#660033" }}>
                  {" "}
                  {data.weather}{" "}
                </h5>
              </div>
            </div>
            <div className="col-4">
              <div className="row">
                <h5 className="" style={{ color: "#660033" }}>
                  {data.max_temp}° /{data.min_temp}°
                </h5>
              </div>
              <div className="row">
                <h5 className="" style={{ color: "#cc6600" }}>
                  {data.curr_temp}°
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
        {/* <img src={`./../icons/${data.icon}.png`} alt="" /> */}
      </div>
    </div>
  );
};

export default MainCard;
