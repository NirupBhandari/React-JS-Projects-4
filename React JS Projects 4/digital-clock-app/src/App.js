import React, { useState, useEffect } from "react";
import "./App.css";

function App() {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <>
      <div className="card">
        <h1>{time.toLocaleTimeString([], { hour12: true })}</h1>
        <h4>Digital India &#9202;&#65039;</h4>
        <h1>{date}</h1>
      </div>
    </>
  );
}

export default App;
