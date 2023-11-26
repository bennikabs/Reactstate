import React, {useState} from "react";

export default function City(props) {
let [temperature, setTemperature]= useState(props.temperature);

function showFahrenheit(event){
  event.preventDefault();
  setTemperature(Math.round((props.temperature * 9) / 5 + 32));}
  
  return (
    <div className="City">
      It is {temperature}°C | <a href="/" onClick={showFahrenheit}> °F </a>in {props.name}
    </div>
  );
}
