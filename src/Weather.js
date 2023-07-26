import React,{useState} from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";


export default function Weather(props) {

  const[weatherData, setWeatherData]= useState({ready: false});
  function handleData(response) {
    console.log(response.data);
   setWeatherData({
    ready: true,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed ,
    city: response.data.name,
    icon: " http://openweathermap.org/img/wn/02n@2x.png",
    description: response.data.weather[0].description,
    date: "Friday 23:48",
   })
   
   
  }
  if (weatherData.ready) {
    return ( 
      <body>
  <div className="container">
    <div className="weather-app">
      <form  className="mb-3">
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Type city name.." className="form-control" autocomplete="off" autofocus="on" />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-300"/>
          </div>
        </div>
      </form>
      <h1 >{weatherData.city}</h1>
      <ul>
        <li>Last updated: {weatherData.date}</li>
        <li className="description text-capitalize" >{weatherData.description}</li>
      </ul>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img src={weatherData.icon} alt={weatherData.description}  />

            <strong >{Math.round(weatherData.temperature)}</strong>
            <span className="units">℃ </span>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity : <span >{weatherData.humidity}</span> %</li>
            <li>Wind : <span >{weatherData.wind}</span>Km/h</li>
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
    </div>
    </div>
    <footer>
      <a href="https://github.com/bakhtino/Vanilla-Weather_app" target="_blank"  rel="noreferrer">Open source code</a>
      by
      <a href="https://www.linkedin.com/in/noushin-bakhtiari-b6314297/?originalSubdomain=ir" target="_blank" rel="noreferrer">Noushin Bakhtiari</a>
      in 7 Feb 2023
    </footer>
  


</body>
  );
  } else{
    const apiKey = "be3787b39239779c9856215f2383d86b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);
   return" Loading...";
  }
  
    }