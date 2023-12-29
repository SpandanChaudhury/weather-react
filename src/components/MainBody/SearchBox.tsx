import { FaSearch } from "react-icons/fa";
import { useAppDispatch, useAppSelector } from "../../store/typedHooks";
import { SearchBoxTypes } from "../../types";
import { updateSearch } from "../../store/slices/searchingTerm";

const SearchBox = ({ findWeather }: SearchBoxTypes) => {
  const searchHistory = JSON.parse(
    localStorage.getItem("searchHistory") || "[]"
  );
  const dispatch = useAppDispatch();
  const query = useAppSelector((state) => state.searching.value);
  const handleEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    console.log(event);
    if (event.key === "Enter") {
      console.log("enter pressed");
      findWeather();
    }
  };
  return (
    <div className="row">
      <div className="col-10">
        <input
          type="text"
          list="recent"
          className="form-control"
          placeholder="Enter city name..."
          value={query}
          onChange={(e) => dispatch(updateSearch(e.target.value.toUpperCase()))}
          onKeyDown={(e) => handleEnter(e)}
        />
        <datalist id="recent">
          {searchHistory.map((history: string) => (
            <option value={history}></option>
          ))}
          {/* <option value="abc"></option>
          <option value="absc"></option>
          <option value="aabc"></option> */}
        </datalist>
      </div>
      <div className="col-2 mx-auto pb-2">
        <button onClick={findWeather} className="btn btn-success">
          <div className="d-flex flex-no-wrap">
            <FaSearch className="mt-1"></FaSearch>
            <span className="ms-2"> Search</span>
          </div>
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
