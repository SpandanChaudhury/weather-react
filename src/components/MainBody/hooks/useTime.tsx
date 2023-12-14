import { useState, useEffect } from "react";

const useTime = () => {
    const [currTime, setCurrTime] = useState<string>('');
  const checkTime = (time : number) => {
    if(time > 9)
      return `${time}`;
    else
      return `0${time}`;
  }
  
  useEffect(() => {
    const intervalId = setInterval(() => {
      let today = new Date();
      var time = `${checkTime(today.getHours())}:${checkTime(today.getMinutes())}:${checkTime(today.getSeconds())}`;
      setCurrTime(time);
    }, 1000);

  }, []);
  return currTime;  
}

export default useTime