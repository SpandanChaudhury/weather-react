import './styles.css';
import useTime from './hooks/useTime';
const Clock = () => {
    const time = useTime();
  return (
    <div className="clock-container mx-auto mb-2">
    <div className="clock">
      <div id="time" className="time"> {time} </div>
    </div>
</div>
  )
}

export default Clock