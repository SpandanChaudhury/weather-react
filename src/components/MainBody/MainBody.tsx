import axios from "axios";
import { useState, createContext } from "react";
import { RequiredData, ToggleSwitchProps } from "../../types";
import { convertData } from "../../utils/tempConversion";
import SearchBox from "./SearchBox";
import MainCard from "./MainCard";
import Clock from "./Clock";
import ToggleData from "./ToggleData/ToggleData";
import ForecastCard from "./ForecastCard";
import Filter from "./Filter";

export const temperatureContext = createContext<ToggleSwitchProps>({});
const MainBody = () => {
  console.log("main body");
  const [fetched, setFetched] = useState("celsius");
  // let today = new Date();
  // let date = today.getDate() + '-'+(today.getMonth()+1)+'-'+ today.getFullYear()
  // var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  // console.log(date);
  const [query, setQuery] = useState("");
  const [data, setData] = useState<RequiredData>();
  const [forecast, setForecast] = useState<RequiredData[]>();
  const [value, setValue] = useState(6);

  // fetching data
  const findWeather = async () => {
    // console.log('findweather');
    const apiKey = process.env.REACT_APP_apiKey;

    const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${apiKey}`;

    await axios
      .get(url)
      .then((response) => {
        console.log(response.data);
        // setQuery(response.data.city_name);
        setFetched("celsius");
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
            wind_speed: response.data.data[i].wind_spd,
          };
          if (i == 0)
            setData({
              ...cdata,
              location: query,
              country: response.data.country_code,
            });
          else selectedData.push(cdata);
        }

        setForecast(selectedData);
      })
      .catch((err) => console.log(err));
  };

  // changing the degree
  const changeData = () => {
    // console.log('changing data');
    if (data && forecast) {
      console.log(fetched);
      let updatedCurrData = convertData(data, fetched);
      let updatedForecast = forecast.map((item: RequiredData) =>
        convertData(item, fetched)
      );
      setFetched((prev) => {
        return prev === "celsius" ? "fahrenheit" : "celsius";
      });
      console.log(fetched);
      setData(updatedCurrData);
      setForecast(updatedForecast);
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setValue(parseInt(event.target.value));
    // console.log('changing value');
  };
  return (
    <section className="container">
      <div className="row">
        <div className="col-10">
          <Clock />
        </div>
        <div className="col-2">
          <Filter value={value} handleChange={handleChange}></Filter>
        </div>
      </div>
      <div className="row">
        <div className="col-10">
          <SearchBox
            query={query}
            setQuery={setQuery}
            findWeather={findWeather}
          ></SearchBox>
        </div>

        <div className="col-2">
          {/* {data ? (
            <ToggleSwitch fetched={fetched} changeData={changeData} />
          ) : (
            ""
          )} */}
          <temperatureContext.Provider value={{ fetched, changeData }}>
            <ToggleData></ToggleData>
          </temperatureContext.Provider>
        </div>
      </div>

      {data ? <MainCard data={data}></MainCard> : ""}
      <div className="d-flex flex-wrap justify-content-center">
        {forecast
          ? forecast.slice(0, value).map((item: RequiredData) => {
              return <ForecastCard {...item} />;
            })
          : ""}
      </div>
    </section>
  );
};

export default MainBody;
