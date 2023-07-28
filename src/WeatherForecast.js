import React from "react";
import WeatherIcon from "./WeatherIcon";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props){

function handleResponse(response){
console.log(response);
}


    let apiKey = "be3787b39239779c9856215f2383d86b";
  let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${props.coordinates.lat}&lon=${props.coordinates.lon}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
    return (
<div className="weatherForecast">
    <div className="row">
        <div className="col">
            <div className="WeatherForecast-day">Fri</div>
        <WeatherIcon code="01d" size={32} />
        <div className="WeatherForecast-temperature">
       <span className="WeatherForecast-temperature-max">19˚</span> {""}
       <span className="WeatherForecast-temperature-min">10˚</span> 
        </div>
        </div>
    </div>


</div>
    );
}