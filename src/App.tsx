// import React from 'react';
// import logo from './logo.svg';
import "./App.css";
import Header from './components/Header/Header';
import MainBody from './components/MainBody/MainBody';
import Footer from './components/Footer/Footer';
import { useState, useEffect } from "react";
function App() {
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
  return (
    <main >
      <Header currTime = {currTime}/>
      {/* </Header> */}
      <MainBody></MainBody>
      <Footer></Footer>
      {/* <img src='./icons/a05n.png' alt="" /> */}
      
    </main>
  );
}

export default App;
