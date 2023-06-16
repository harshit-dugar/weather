import React, { useEffect, useState } from "react";
import "./weather.css";

function Weather(){
    const [lat, setLat] = useState([]);
    const [long, setLong] = useState([]);
    const [data, setData] = useState([]);
    useEffect(() => {
        const fetchWeather = async ()=>{
            navigator.geolocation.getCurrentPosition(function(position) {
                setLat(position.coords.latitude);
                setLong(position.coords.longitude);
            });

            const url = process.env.REACT_APP_API_LINK
            const api_key=process.env.REACT_APP_API_KEY
            await fetch(url+'weather/?lat='+lat+'&lon='+long+`&units=metric&APPID=${api_key}`)
            .then(res => res.json())
            .then(result => {
                setData(result)
                console.log(result);
            })
        }
        fetchWeather();
    }, [lat, long]);

    return(
        <div className="card">
            {typeof data.main != 'undefined' ? (
                <div>
                    <div>
                        <div>{data.name}, {data.sys.country}</div>
                    </div>
                    <div>
                        <div className="text-2xl">
                            {Math.round(data.main.temp)}°c
                        </div>
                        <div>
                            {data.weather[0].main}
                        </div>
                    </div>
                </div>
            ) : ('')}
        </div>
    )
}

export default Weather;