import React from "react";
import { useEffect, useState } from "react";
// import Weather from './components/Weather'

function App() {
  const [lat, setLat] = useState();
  const [lon, setLong] = useState();
  const [data, setData] = useState([]);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      setLat(position.coords.latitude);
      setLong(position.coords.longitude);
    });
  }, []);

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${process.env.REACT_APP_API_KEY}&units=metric`)
      .then((res) => res.json())
      .then((result) => {
        setData(result);
      });
  }, [lat, lon]);
  console.log(data);

  return (
    <div className="App">
      <h1 className="">Hello</h1>
    </div>
  );
}

export default App;