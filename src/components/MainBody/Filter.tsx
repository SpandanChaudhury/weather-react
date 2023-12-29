import React, { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { updateDays } from "../../store/slices/daysOfForecast";

const Filter = () => {
  // const [days, setDays] = useState(6);
  const dispatch = useAppDispatch();
  let value = useAppSelector((state) => state.forecast.days);
  console.log(value);
  // if (typeof value !== "number") {
  //   console.log(value);
  //   value.then((data) => setDays(data));
  //   // value = Number(value);
  // }
  // console.log(days);

  // const handleDayChange = async (
  //   event: React.ChangeEvent<HTMLSelectElement>
  // ) => {
  //   if ("caches" in window) {
  //     const cache = await caches.open("days");
  //     console.log(event.target.value);
  //     await cache.put("requested-days", new Response(event.target.value));
  //     dispatch(updateDays(parseInt(event.target.value)));
  //   }
  // };
  return (
    <div className="d-flex flex-sm-row flex-nowrap">
      <div className="col-xs-4 col-md-8 col-lg-6 col-xl-4"> 
        <h5 className="text-white mt-1 text-nowrap">No.of days forecast</h5>
      </div>
      <div className="col-md-2 col-lg-2">
        <select
          className="form-control text-center"
          name="days"
          id="days"
          onChange={(event) =>
            dispatch(updateDays(parseInt(event.target.value)))
          } 
          value={value}
        >
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
        </select>
      </div>
    </div>
  );
};

export default Filter;
