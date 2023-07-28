import React from "react";
import WeatherIcon from "./WeatherIcon";
import "./WeatherForecast.css";
export default function WeatherForecast(){
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