import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
import WeatherTemperature from "./WeatherTemperature";
import "./Weather.css";

export default function WeatherInfo(props){
    return (
      <div className="weatherInfo">
      <h1 >{props.data.city}</h1>
<ul>
  <li> <FormattedDate date={props.data.date} /> </li>
  <li className="description text-capitalize" >{props.data.description}</li>
</ul>
<div className="row mt-3">
  <div className="col-6">
    <div className="d-flex ">
      <div className="temperatureCanvas" >
      <WeatherIcon code={props.data.icon} size={52}  />
      </div>
      <div >
      <WeatherTemperature celsiuc={props.data.temperature} />
      </div>    
    </div>
  </div>
  <div className="col-6">
    <ul>
      <li>Humidity : <span >{props.data.humidity}</span> %</li>
      <li>Wind : <span >{props.data.wind}</span>Km/h</li>
    </ul>
  </div>
</div>

  </div>
    );
}