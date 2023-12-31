import React,{useState} from "react";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";
import "./Weather.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

export default function Weather(props) {

  const[weatherData, setWeatherData]= useState({ready: false});
  const [city, setCity] = useState(props.defaultCity);
  function handleData(response) {
    console.log(response.data);
   setWeatherData({
    ready: true,
    coordinates: response.data.coord,
    temperature: response.data.main.temp,
    humidity: response.data.main.humidity,
    wind: response.data.wind.speed ,
    city: response.data.name,
    icon: response.data.weather[0].icon,
    description: response.data.weather[0].description,
    date: new Date(response.data.dt*1000),
   })  
  }
  function search(){
    const apiKey = "be3787b39239779c9856215f2383d86b";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleData);
  }
  function handleSubmit(event){
    event.preventDefault();
    search();
  }
  function handleCityChange(event){
    setCity(event.target.value);
  }
 

  if (weatherData.ready) {
    return ( 
      <div>
  <div className="container">
    <div className="weather-app">
      <form  className="mb-3" onSubmit={handleSubmit} >
        <div className="row">
          <div className="col-9">
            <input type="search" placeholder="Type city name.." className="form-control" autocomplete="off" autofocus="on" onChange={handleCityChange} />
          </div>
          <div className="col-3">
            <input type="submit" value="Search" className="btn btn-primary w-300"/>
          </div>
        </div>
      </form>
      <WeatherInfo data={weatherData} />
      <WeatherForecast coordinates={weatherData.coordinates} />
      </div>
      <footer>
        <a href="https://github.com/bakhtino/Vanilla-Weather_app" target="_blank" rel="noreferrer">Open source code</a>
        by
        <a href="https://www.linkedin.com/in/noushin-bakhtiari-b6314297/?originalSubdomain=ir" target="_blank" rel="noreferrer">Noushin Bakhtiari</a>
        in 28 JUL 2023 
      </footer>
      </div>    
</div>
  );
  } else{
    search();
   return" Loading...";
  }
  
    }