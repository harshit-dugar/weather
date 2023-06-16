import React from "react";
import moment from 'moment';

function Time({weather}){
    return(
        <div>
            <div className="flex items-center justify-center my-6">
                <p className="text-white text-xl font-extralight">
                {moment().format('dddd')},{moment().format('LL')}, {new Date(weather.timezone *1000).toLocaleTimeString(undefined, {timeZone: 'Asia/Kolkata'})}</p>
            </div>
            <div className="flex items-center justify-center my-3">
                <p className="text-white text-3xl font-medium">
                {weather.name},{weather.country}</p>
            </div>
        </div>
    )
}

export default Time;