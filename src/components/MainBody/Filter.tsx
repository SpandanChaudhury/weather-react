import React from "react";
import { FilterProps } from "../../types";

const Filter = ({ value, handleChange }: FilterProps) => {
  return (
    <div className="">
      <h5 className="text-white">No.of days forecast</h5>
      <select
        className="form-control text-center"
        name="days"
        id="days"
        onChange={(event) => handleChange(event)}
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
