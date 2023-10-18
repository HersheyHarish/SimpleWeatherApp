import React from "react";
import {weatherConditions} from "./conditions.jsx";

//displays information collected from user
export default function UserWeatherData({weatherData}){
    console.log(weatherData)
    const now = new Date();
    const hour = now.getHours();
    var currWeatherColor = (hour>=18 || hour<=6) ?  "#616161" :  weatherConditions[weatherData.weather[0].main].color
    console.log(currWeatherColor)
    console.log(hour)

    return(
    <div className="card--main" style={{backgroundColor : currWeatherColor}}>
        <h1>Location : {weatherData.name}</h1>
        <div className="card--temp" >
            <img src= {`https://openweathermap.org/img/wn/${weatherData.weather[0].icon}@2x.png`} className="centered-image"/>
            <p>Current Temperature: {Math.ceil(weatherData.main.temp)}°F</p>
            <p>High: {Math.ceil(weatherData.main.temp_max)}°F  &nbsp; Low: {Math.ceil(weatherData.main.temp_min)}°F </p>
            <p>{weatherConditions[weatherData.weather[0].main].title}</p>
        </div>
    </div>

    )
}
