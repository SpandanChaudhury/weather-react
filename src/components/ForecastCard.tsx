import React from "react";
import { RequiredData } from "../types";
// import {} from '../../public/icons/'
// /home/spandan/Documents/All Data/React-ts/weather-app/public/icons/a05n.png
const ForecastCard = (data: RequiredData) => {
  console.log(data);
  return (
    <div className="card" style={{width: '18rem'}}>
      <img src={`./../icons/${data.icon}.png`} alt="" />

      <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>

  );
};

export default ForecastCard;
