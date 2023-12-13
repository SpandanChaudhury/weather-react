import axios from "axios";
import SearchBox from "./SearchBox";
import MainCard from "./MainCard";
import { useState } from "react";
import { RequiredData } from "../../types";
import ForecastCard from "./ForecastCard";
const MainBody = () => {
  const apiKey = process.env.REACT_APP_apiKey;
  console.log(apiKey);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<RequiredData>();
  const [forecast, setForecast] = useState<RequiredData[]>();
  const findWeather = async () => {
    console.log('hello');
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${apiKey}`;
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // setQuery(response.data.city_name);
        let selectedData = [];
        for (let i = 0; i < response.data.data.length; i++) {
          let cdata = {
            curr_temp: response.data.data[i].temp,
            max_temp: response.data.data[i].max_temp,
            min_temp: response.data.data[i].min_temp,
            valid_date: response.data.data[i].valid_date,
            weather: response.data.data[i].weather.description,
            icon: response.data.data[i].weather.icon,
            precipitation: response.data.data[i].pop,
            wind_speed: response.data.data[i].wind_spd
          };
          selectedData.push(cdata);
        }
        setData({
          ...selectedData[0],
          location: query
        });
        console.log(selectedData[0]);
        setForecast(selectedData);
      })
      .catch((err) => console.log(err));
  };

  return (
    <section className="container">
      <SearchBox
        query={query}
        setQuery={setQuery}
        findWeather={findWeather}
      ></SearchBox>
      {data ? <MainCard data={data}></MainCard> : ""}
      <div className="d-flex flex-wrap justify-content-between">

      {forecast
        ? forecast.map((item: RequiredData) => {
          return <ForecastCard {...item} />;
        })
        : ""}
        </div>
    </section>
  );
};

export default MainBody;
