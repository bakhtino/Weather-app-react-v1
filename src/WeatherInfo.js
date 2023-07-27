import React from "react";
import FormattedDate from "./FormattedDate";
import WeatherIcon from "./WeatherIcon";
export default function WeatherInfo(props){
    return (
      <div className="weatherInfo">
      <h1 >{props.data.city}</h1>
<ul>
  <li> <FormattedDate date={props.data.date} /> </li>
  <li className="description text-capitalize" >{props.data.description}</li>
</ul>
<div className="row">
  <div className="col-6">
    <div className="clearfix weather-temperature">
      <div >

      <WeatherIcon code={props.data.icon}  />
      </div>
      
      <strong >{Math.round(props.data.temperature)}</strong>
      <span className="units">℃ </span>
    </div>
  </div>
  <div className="col-6">
    <ul>
      <li>Humidity : <span >{props.data.humidity}</span> %</li>
      <li>Wind : <span >{props.data.wind}</span>Km/h</li>
    </ul>
  </div>
</div>
<div className="weather-forecast" ><div class="row"><div className="col-2">
      <div className="weather-forecast-date">Fri
      </div>
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" width="42"/>
      <div className="weather-forecast-temperature">
      <span classNames="weather-forecast-temperature-max">38° </span> 
      <span className="weather-forecast-temperature-min">31° </span> 
      </div>
    </div><div className="col-2">
      <div className="weather-forecast-date">Sat
      </div>
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" width="42"/>
      <div className="weather-forecast-temperature">
      <span className="weather-forecast-temperature-max">39° </span> 
      <span className="weather-forecast-temperature-min">31° </span> 
      </div>
    </div><div className="col-2">
      <div className="weather-forecast-date">Sun
      </div>
      <img src="http://openweathermap.org/img/wn/01d@2x.png" alt="" width="42"/>
      <div className="weather-forecast-temperature">
      <span className="weather-forecast-temperature-max">38° </span> 
      <span className="weather-forecast-temperature-min">31° </span> 
      </div>
    </div><div className="col-2">
      <div className="weather-forecast-date">Mon
      </div>
      <img src="http://openweathermap.org/img/wn/04d@2x.png" alt="" width="42"/>
      <div className="weather-forecast-temperature">
      <span className="weather-forecast-temperature-max">38° </span> 
      <span className="weather-forecast-temperature-min">31° </span> 
      </div>
    </div><div className="col-2">
      <div className="weather-forecast-date">Tue
      </div>
      <img src="http://openweathermap.org/img/wn/03d@2x.png" alt="" width="42"/>
      <div className="weather-forecast-temperature">
      <span className="weather-forecast-temperature-max">39° </span> 
      <span className="weather-forecast-temperature-min">32° </span> 
      </div>
    </div><div className="col-2">
      <div className="weather-forecast-date">Wed
      </div>
      <img src="http://openweathermap.org/img/wn/02d@2x.png" alt=" " width="42"/>
      <div className="weather-forecast-temperature">
      <span className="weather-forecast-temperature-max">39° </span> 
      <span className="weather-forecast-temperature-min">33° </span> 
      </div>
    </div></div></div>
<footer>
<a href="https://github.com/bakhtino/Vanilla-Weather_app" target="_blank"  rel="noreferrer">Open source code</a>
by
<a href="https://www.linkedin.com/in/noushin-bakhtiari-b6314297/?originalSubdomain=ir" target="_blank" rel="noreferrer">Noushin Bakhtiari</a>
in 7 Feb 2023
</footer>
  </div>
    );
}