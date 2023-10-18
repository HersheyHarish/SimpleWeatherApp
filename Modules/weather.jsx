import React, {useState, useEffect} from "react";
import {VITE_REACT_WEATHER_APP_KEY, VITE_REACT_APP_API_URL} from "../src/keys.jsx"
import UserWeatherData from "./data.jsx"

//Collects latitude and longitude from user and collects data from OpenWeatherApi of location
export default function Weather(){

    const[latitude, setLat] = React.useState([]);
    const [longitude,setLong] = React.useState([]);
    const [WeatherData, setData] = React.useState([]);

    React.useEffect(() => {
            navigator.geolocation.getCurrentPosition(function(position) {
            setLat(position.coords.latitude);
            setLong(position.coords.longitude);
        });
    },[latitude,longitude])

    React.useEffect(() => {
        if(latitude.length != 0){
            async function getWeather(){
                const res = await fetch(`${VITE_REACT_APP_API_URL}/weather/?lat=${latitude}&lon=${longitude}&units=imperial&APPID=${VITE_REACT_WEATHER_APP_KEY}`)
                const data = await res.json()
                setData(data)
            }
            getWeather()
        }
    },[latitude])

    return(
        <div>
        {(typeof WeatherData.main != 'undefined') ? <UserWeatherData weatherData = {WeatherData}/> : <div style={{
             fontFamily: 'Jost, sans-serif', 
             display: 'flex',
             flexDirection: 'column',
             justifyContent: 'center',
             alignItems: 'center',
            }}><h1>Searching for user location...</h1></div>}
        </div>
    )
        
}
