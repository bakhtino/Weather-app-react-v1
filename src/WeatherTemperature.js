import React,{useState} from "react";
import "./WeatherTemperature.css";
import 'bootstrap/dist/css/bootstrap.min.css';

export default function WeatherTemperature(props){
    const [unit , setUnit]= useState("celsiuc");
    function showFahrenhiet(event){
        event.preventDefault();
        setUnit("fahrenhiet");
    }
    function showCelsiuc(event){
        event.preventDefault();
        setUnit("celsiuc");
    }

    if (unit=== "celsiuc"){
        return(
            <div className="temperature">
    <strong  >{Math.round(props.celsiuc)}</strong>
          <span className="units"> ℃  | <a href="/" onClick={showFahrenhiet} className="text-decoration-none" >˚F</a>  </span>
          
            </div>
        );
    } else{
        let fahrenhiet = (props.celsiuc*9/5)+32;
        return(
            <div className="temperature">
    <strong  >{Math.round(fahrenhiet)}</strong>
          <span className="units">
             <a href="/" onClick={showCelsiuc} className="text-decoration-none" >
                ℃</a>
                  | ˚F
                    </span>
          
            </div>
        );  
    }
    
}
