import React from "react";

export default function Formatteddate(props) {
    console.log(props.date);
    let days = [
        "sunday",
        "Monday",
        "Tuesday",
        "Wedensday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
    let day = days[props.date.getDay()];
    let hour=props.date.getHours();
    if (hour<10){
        hour=`0${minutes}`;
    }
    let minutes= props.date.getMinutes();
    if (minutes<10){
        minutes=`0${minutes}`;
    }
    return <div>{day}  {hour}:{minutes}</div> ;
}