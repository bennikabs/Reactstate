import React, {useState} from "react";

export default function City(props) {
let [temperature, setTemperature]= useState(props.temperature);
  let[unit, setUnit]= useState("celsius");

function showFahrenheit(event){
  event.preventDefault();
  setTemperature(Math.round((props.temperature * 9) / 5 + 32));
  setUnit("imperial");
}
  
function showCelsius(event){
  event.preventDefault();
  setTemperature(props.temperature);
  setUnit("celsius");
}
  
  return (
    <div className="City">
      It is {temperature} ({unit})<a href="/" onClick={showCelsius}>°C </a> | <a href="/" onClick={showFahrenheit}> °F </a>in {props.name}
    </div>
  );
}
