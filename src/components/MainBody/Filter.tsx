import React from "react";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { updateDays } from "../../store/slices/daysOfForecast";

const Filter = () => {
  const dispatch = useAppDispatch();
  const value = useAppSelector((state) => state.forecast.days);
  return (
    <div className="">
      <h5 className="text-white">No.of days forecast</h5>
      <select
        className="form-control text-center"
        name="days"
        id="days"
        onChange={(event) => dispatch(updateDays(parseInt(event.target.value)))}
        value={value}
      >
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
      </select>
    </div>
  );
};

export default Filter;
