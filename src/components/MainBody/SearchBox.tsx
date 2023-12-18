import { FaSearch } from "react-icons/fa";
import { SearchBoxTypes } from "../../types";
import ToggleSwitch  from './ToggleData/ToggleSwitch';
const SearchBox = ({ query, setQuery, findWeather }: SearchBoxTypes) => {
  return (
    <div className="row">
      <div className="col-10">
        <input
          type="text"
          className="form-control"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => setQuery(e.target.value.toUpperCase())}
        />
      </div>
      <div className="col-2 mx-auto pb-2">
        <button onClick={findWeather} className = "btn btn-success">
          <FaSearch></FaSearch>
          Search
        </button>
      </div>
      {/* <div className="col-2 d-flex">
        <h5 className = "mx-auto p-2 text-white">C</h5>
        <ToggleSwitch/>
        <h5 className = "mx-auto p-2 text-white">F</h5>
      </div> */}
    </div>
  );
};

export default SearchBox;
