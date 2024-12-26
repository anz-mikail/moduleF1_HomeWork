import React,  { Component } from "react";

import "../styles/OneDay.css";
import City from "./City";
import obj from "./CityChange.js";
import City_1 from "./City_1";


function OneDay() {
    let city_name = City();
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&` +
        'lang=ru&appid=ccdf2d97227ac4a7ed6d3c0780c5d29a')
        .then(function(response) {return response.json();})
        .then(function(data) {
            document.querySelector('.city').textContent = data.name;
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
            document.querySelector('.weather').textContent = data.weather[0]['description'];
            document.querySelector('.icon').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function() {
        })

    return (
        <main>
            <p className={'city'}></p>
            <p className={'temp'}></p>
            <p className={'weather'}></p>
            <p className={'icon'}></p>
        </main>
    )
}


export default OneDay;