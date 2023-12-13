import React from "react";
import { FaSearch } from "react-icons/fa";
import { SearchBoxTypes } from "../../types";
// import ToggleSwitch  from './ToggleSwtich';
const SearchBox = ({ query, setQuery, findWeather }: SearchBoxTypes) => {
  return (
    <div className="row">
      <div className="col-8">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div className="col-2 mx-auto pb-2">
        <button onClick={findWeather} className = "btn btn-outline-primary">
          <FaSearch></FaSearch>
          Search
        </button>
      </div>
      {/* <div className="col-2 d-flex">
        <h5 className = "mx-auto p-2">C</h5>
        <ToggleSwitch></ToggleSwitch>
        <h5 className = "mx-auto p-2">F</h5>
      </div> */}
    </div>
  );
};

export default SearchBox;
