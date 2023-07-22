import React from "react";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Weather() {
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
        <h1 >Tehran</h1>
        <ul>
          <li>Last updated: <span >Friday 23:48 </span></li>
          <li id="description" className="description">few clouds</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <div className="clearfix weather-temperature">
              <img src=" http://openweathermap.org/img/wn/02n@2x.png" alt="few clouds"  />

              <strong >34</strong>
              <span className="units">℃ </span>
            </div>
          </div>
          <div className="col-6">
            <ul>
              <li>Humidity : <span >12</span> %</li>
              <li>Wind : <span >4</span>Km/h</li>
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
    }