import React, { useState, useEffect} from "react";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import "./WeatherForecast.css";
export default function WeatherForecast(props){
let [loaded, setLoaded]= useState(false);
let[forecast, setForecast]= useState(null);

useEffect(()=>{
    setLoaded(false);
},[props.coordinates])



function handleResponse(response){
setForecast(response.data.daily);
setLoaded(true);
}
  
  if (loaded){
  
    return (
        <div className="weatherForecast">
            <div className="row">
                {forecast.map(function(dailyForecast, index){
                    if (index<5){
                        return(
                            <div className="col" key={index}>
                       <WeatherForecastDay data={dailyForecast} />
                    </div>
                        );
                    } else{
                        return null;
                    }
                   
                })}
                
                
            </div>      
        </div>
            );
    
  }else{
    let apiKey = "be3787b39239779c9856215f2383d86b";
    let latitute= props.coordinates.lat;
    let longtitude= props.coordinates.lon;
    let apiUrl = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitute}&lon=${longtitude}&appid=${apiKey}&units=metric`;
    
    axios.get(apiUrl).then(handleResponse);
    
    return null;
  }
    
}