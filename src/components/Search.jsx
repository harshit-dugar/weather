import React, { useState } from "react";
import { UilSearch,UilLocationPoint } from '@iconscout/react-unicons'

function Search({setQuery}){
    const [city,setCity] = useState('');
    function handleSearchClick(){
        if(city){
            setQuery({
                q:city
            })
        }
    }
    function handleLocationClick(){
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(function(position) {
                let lat = position.coords.latitude
                let lon = position.coords.longitude
                setQuery({
                    lat,lon
                })
            });
        }
    }
    return(
        <div className="flex flex-row justify-center my-6">
            <div className="flex flex-row w2/3 items-center justify-center space-x-4">
                <input 
                    value={city}
                    onChange={(e) =>setCity(e.currentTarget.value)}
                    type="text"
                    placeholder="city"
                    className="text-xl font-light p-2 capitalize w-full shadow-xl placeholder:lowercase focus:outline-none"
                />
                <UilSearch 
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleSearchClick}
                />
                <UilLocationPoint
                    size={25}
                    className="text-white cursor-pointer transition ease-out hover:scale-125"
                    onClick={handleLocationClick}
                />
            </div>
        </div>
    )
}

export default Search;