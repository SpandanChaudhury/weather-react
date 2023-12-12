import axios from "axios";
import SearchBox from "./SearchBox";
import MainCard from "./MainCard";
import { useState } from "react";
import { RequiredData } from "../types";
import ForecastCard from "./ForecastCard";
const MainBody = () => {
  const [query, setQuery] = useState("");
  const [data, setData] = useState<RequiredData>();
  const [forecast, setForecast] = useState<RequiredData[]>();
  const findWeather = async () => {
    console.log('hello');
    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=2d3ba3ba66f94464bc3b46cf2a2db104`;
    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // setQuery(response.data.city_name);
        let selectedData = [];
        for (let i = 0; i < response.data.data.length; i++) {
          let cdata = {
            app_max_temp: response.data.data[i].app_max_temp,
            max_temp: response.data.data[i].max_temp,
            min_temp: response.data.data[i].min_temp,
            valid_date: response.data.data[i].valid_date,
            weather: response.data.data[i].weather.description,
            icon: response.data.data[i].weather.icon
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
      {query}
      {data ? <MainCard data={data}></MainCard> : ""}
      {forecast
        ? forecast.map((item: RequiredData) => {
            return <ForecastCard {...item} />;
          })
        : ""}
    </section>
  );
};

export default MainBody;
