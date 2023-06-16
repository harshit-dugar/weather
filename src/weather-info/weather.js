import { DateTime } from "luxon";

const api = process.env.REACT_APP_API_KEY
const api_url = process.env.REACT_APP_API_LINK

const getWeather = (infoType,searchParam)=>{
    const url = new URL(api_url+infoType)
    url.search = new URLSearchParams({...searchParam,appid:api})
    return fetch(url).then((res)=> res.json())
};

const formatWeather = (data)=>{
    const {
        coord: { lat, lon },
        main: { temp, feels_like, temp_min, temp_max, humidity },
        name,
        dt,
        sys: { country, sunrise, sunset },
        weather,
        wind: { speed },
    } = data;
    const {main:details,icon} = weather[0]
    return {
        lat,
        lon,
        temp,
        feels_like,
        temp_min,
        temp_max,
        humidity,
        name,
        dt,
        country,
        sunrise,
        sunset,
        details,
        icon,
        speed,
      };
}

const formatToLocalTime = (
    secs,
    zone,
    format = "cccc, dd LLL yyyy' | Local time: 'hh:mm a"
) => DateTime.fromSeconds(secs).setZone(zone).toFormat(format);

const getFormatWeather = async (searchParam)=>{
    const formattedCurrentWeather= await getWeather('weather',searchParam).then(formatWeather)
    const { lat, lon } = formattedCurrentWeather;
    const formattedForecastWeather = await getWeather('weather', {
        lat,
        lon,
        units: searchParam.units,
    });
    return { ...formattedCurrentWeather, ...formattedForecastWeather };
    // return formattedCurrentWeather;
}

const iconUrlFromCode = (code) =>
(`http://openweathermap.org/img/wn/${code}@2x.png`)

export default getFormatWeather;
export {formatToLocalTime,iconUrlFromCode}