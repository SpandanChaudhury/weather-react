import { ToggleSwitchProps } from "../../types";
import "./styles.css";
const ToggleSwtich = ({fetched, changeData}: ToggleSwitchProps) => {
  const degree = fetched != 'celsius';
  return (
    <div className = "row">
        <div className="col-2">
          <h4 className = {!degree ? "text-warning" : "text-white"}>°C</h4>
        </div>
        <div className="col-8 text-center">

        <input type="checkbox" checked = {degree} onChange = {changeData} />
        </div>
        <div className="col-2 pr-4">
        <h4 className = {degree ? "text-warning" : "text-white"}>°F</h4>

        </div>
    </div>
  )
}

export default ToggleSwtich