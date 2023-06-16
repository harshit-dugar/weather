import React, { useEffect, useState } from "react";
import "./index.css"
import Search from "./components/Search";
import Time from "./components/Time";
import WeatherData from "./components/WeatherData";
import getFormatWeather from "./weather-info/weather";

function App() {
  const [query,setQuery] = useState({q:'delhi'})
  const [weather,setWeather] = useState(null)
  
  useEffect(()=>{
    const fetchWeather = async ()=>{
      await getFormatWeather({...query,units:'metric'}).then(
        (data)=>{
          setWeather(data)
          console.log(data);
        })
      }
      fetchWeather()
  },[query]);

  const formatBackground = ()=>{
    if(!weather) return 'from-cyan-400 to-blue-600'
    const threshold = 40
    if(weather.temp< threshold) return 'from-cyan-400 to-blue-600'
    return 'from-yellow-700 to-orange-700'
  }

  return (
    <div className={`mx-auto max-w-screen-md mt-14 py-5 px-32 bg-gradient-to-br ${formatBackground()} shadow-xl shadow-gray-400`}>
      <Search setQuery={setQuery}/>
      {weather && (
        <div>
        <Time weather={weather}/>
        <WeatherData weather={weather}/>
        </div>
      )}
    </div>
  );
}

export default App;