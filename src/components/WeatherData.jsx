import React from "react";
import {UilTemperature,UilTear,UilWind,UilSun,UilSunset} from "@iconscout/react-unicons";
import { iconUrlFromCode } from "../weather-info/weather";

function WeatherData({weather:{details,icon,temp,temp_min,temp_max,sunrise,sunset,
    speed,
    humidity,
    feels_like}})
    {
    return(
        <div>
            <div className="flex items-center justify-center py-6 text-xl text-cyan-300">
                <p>{details}</p>
            </div>
            <div className="flex flex-row items-center justify-between text-white py-3">
                <img src={iconUrlFromCode(icon)} alt="" className="w-20"/>
                <p className="text-5xl">{temp.toFixed()}°C</p>
                <div className="flex flex-col space-y-2">
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTemperature size={18} className="mr-1" />
                        Feels Like: 
                        <span className="font-medium ml-1">{feels_like}°C</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilTear size={18} className="mr-1" />
                        Humidity: 
                        <span className="font-medium ml-1">{humidity} %</span>
                    </div>
                    <div className="flex font-light text-sm items-center justify-center">
                        <UilWind size={18} className="mr-1" />
                        Wind: 
                        <span className="font-medium ml-1">{speed} Kmph</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-row items-center justify-center space-x-2 text-white text-sm py-3">
                <UilSun />
                <p className="font-light">
                Rise:{" "}
                <span className="font-medium ml-1">
                    {new Date(sunrise * 1000).toLocaleTimeString("en-IN", {})}
                </span>
                </p>
                <p className="font-light">|</p>

                <UilSunset />
                <p className="font-light">
                    Set:{" "}
                    <span className="font-medium ml-1">
                    {new Date(sunset * 1000).toLocaleTimeString("en-IN", {})}
                    </span>
                </p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                High:{" "}
                <span className="font-medium ml-1">
                    {temp_max.toFixed()}°C
                </span>
                </p>
                <p className="font-light">|</p>

                <UilSun />
                <p className="font-light">
                Low:{" "}
                <span className="font-medium ml-1">
                    {temp_min.toFixed()}°C
                </span>
                </p>
            </div>
        </div>
    )
}

export default WeatherData;