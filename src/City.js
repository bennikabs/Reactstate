import React, {useState} from "react";

export default function City(props) {
let [temperature, setTemperature]= useState(props.temperature);

function showFahrenheit(event){
  event.preventDefault();
  setTemperature(Math.round((props.temperature * 9) / 5 + 32));
}
  
function showCelsius(event){
  event.preventDefault();
  setTemperature(props.temperature);
}
  
  return (
    <div className="City">
      It is {temperature}<a href="/" onClick={showCelsius}>°C </a> | <a href="/" onClick={showFahrenheit}> °F </a>in {props.name}
    </div>
  );
}
