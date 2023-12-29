import { useContext } from "react";
// import { ToggleSwitchProps } from "../../../types";
import { temperatureContext } from "../MainBody";
import "../styles.css";
// { fetched, changeData }: ToggleSwitchProps
const ToggleSwtich = () => {
  const { fetched, changeData } = useContext(temperatureContext);
  const degree = fetched != "celsius";
  return (
    <div className="d-flex flex-nowrap justify-content-end mr-4">
        <h4 className={!degree ? "text-warning mt-2 me-2" : "text-white mt-2 me-2"}>°C</h4>
        <input type="checkbox" checked={degree} onChange={changeData} />
        <h4 className={degree ? "text-warning mt-2 ms-2" : "text-white mt-2 ms-2"}>°F</h4>
      {/* <div className="col-md-2 col-sm-3">
      </div>
      <div className="col-md-4 col-sm-6">
      </div>
      <div className="col-md-2 col-sm-3">
      </div> */}
    </div>
  );
};

export default ToggleSwtich;
