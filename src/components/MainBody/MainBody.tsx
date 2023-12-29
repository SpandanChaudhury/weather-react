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
import ChartBody from "./ChartBody/ChartBody";

import { useAppSelector } from "../../store/typedHooks";


export const temperatureContext = createContext<ToggleSwitchProps>({});
const MainBody = () => {
  console.log("main body");
  //-------------------------- using redux ---------------------------
  let days = useAppSelector((state) => state.forecast.days);
  // if(typeof days !== 'number')
  //   days = Number(days);
  const query = useAppSelector((state) => state.searching.value);

  // let today = new Date();
  // let date = today.getDate() + '-'+(today.getMonth()+1)+'-'+ today.getFullYear()
  // var time = `${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`;
  // console.log(date);

  //-------------------------------- using normal state --------------------------------
  const [fetched, setFetched] = useState("celsius");
  const [data, setData] = useState<RequiredData>();
  const [forecast, setForecast] = useState<RequiredData[]>();
  // const [query, setQuery] = useState("");
  // const [value, setValue] = useState(6);

  // fetching data
  const findWeather = async () => {
    // console.log('findweather');
    // if('caches' in window)
    // {
    //   console.log('present');
    //   const cache = await caches.open('searchHistory');
    //   const cacheValue = await cache.match('query');
    //   if(cacheValue)
    //   {
    //     console.log(cacheValue);
    //     const value = await cacheValue.text();
    //     console.log(value);
    //     await cache.put('query', new Response(query));

    //   }
    //   else
    //   {
    //     await cache.put('query', new Response(query));
    //   }
    // }
    if(query.length != 0)
    {
      if(localStorage.getItem('searchHistory'))
      {
        let history = JSON.parse(localStorage.getItem('searchHistory') || '');
        
        if(history.length < 3)
        {
          history.unshift(query);
        }
        else
        {
          history.pop();
          history.unshift(query);
        }
        localStorage.setItem('searchHistory', JSON.stringify(history));
      }
      else
      {
        let history : string[] = [];
        history.push(query);
        localStorage.setItem('searchHistory', JSON.stringify(history));
      }
      const apiKey = process.env.REACT_APP_apiKey;
  
      const url = `https://api.weatherbit.io/v2.0/forecast/daily?city=${query}&key=${apiKey}&days=12`;
  
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
              humidity: response.data.data[i].rh
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
    }
    
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

  return (
    <section className="container">
      <div className="row">
        <div className="col-10">
          <Clock />
        </div>
        <div className="col-2">
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <SearchBox
            findWeather={findWeather}
          ></SearchBox>
        </div>

      </div>
      <div className="row p-2">
        <div className="col-md-6 col-sm-6 col-xs-6">
        <Filter></Filter>

        </div>
        <div className="col-md-5 col-sm-6 col-xs-6">
        <temperatureContext.Provider value={{ fetched, changeData }}>
            <ToggleData></ToggleData>
          </temperatureContext.Provider>
        </div>
      </div>

      {data ? <MainCard key = {query} data={data}></MainCard> : ""}
      <div className="d-flex flex-wrap justify-content-center">
        {forecast
          ? forecast.slice(0, days).map((item: RequiredData) => {
              return <ForecastCard {...item} />;
            })
          : ""}
      </div>
      { forecast && (<ChartBody data = {forecast}/>)}
    </section>
  );
};

export default MainBody;
