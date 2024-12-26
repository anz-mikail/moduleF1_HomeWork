import React,  { Component } from "react";

import "../styles/FiveDays.css";
import City from "./City";
import obj from "./CityChange.js";


function FiveDays() {
    let city_name = City();
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&` +
        'lang=ru&appid=ccdf2d97227ac4a7ed6d3c0780c5d29a')
        .then(function(response) {return response.json();})
        .then(function(data) {
            // document.querySelector('.city1').textContent = data.city.name
            document.querySelector('.temp1').innerHTML = Math.round(data.list[6].main.temp -273) + '&deg;';
            document.querySelector('.temp2').innerHTML = Math.round(data.list[14].main.temp -273) + '&deg;';
            document.querySelector('.temp3').innerHTML = Math.round(data.list[22].main.temp -273) + '&deg;';
            document.querySelector('.temp4').innerHTML = Math.round(data.list[30].main.temp -273) + '&deg;';
            document.querySelector('.temp5').innerHTML = Math.round(data.list[38].main.temp -273) + '&deg;';
            document.querySelector('.weather1').textContent = data.list[6].weather[0]['description'];
            document.querySelector('.weather2').textContent = data.list[14].weather[0]['description'];
            document.querySelector('.weather3').textContent = data.list[22].weather[0]['description'];
            document.querySelector('.weather4').textContent = data.list[30].weather[0]['description'];
            document.querySelector('.weather5').textContent = data.list[38].weather[0]['description'];
            document.querySelector('.icon1').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[6].weather[0]['icon']}@2x.png">`;
            document.querySelector('.icon2').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[14].weather[0]['icon']}@2x.png">`;
            document.querySelector('.icon3').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[22].weather[0]['icon']}@2x.png">`;
            document.querySelector('.icon4').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[30].weather[0]['icon']}@2x.png">`;
            document.querySelector('.icon5').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[38].weather[0]['icon']}@2x.png">`;
            // let test = dt_txt.slice(1, 3)
            document.querySelector('.day1').textContent = data.list[6].dt_txt.slice(5, 16);
            document.querySelector('.day2').textContent = data.list[14].dt_txt.slice(5, 16);
            document.querySelector('.day3').textContent = data.list[22].dt_txt.slice(5, 16);
            document.querySelector('.day4').textContent = data.list[30].dt_txt.slice(5, 16);
            document.querySelector('.day5').textContent = data.list[38].dt_txt.slice(5, 16);
        })
        .catch(function() {
        })
    return (
        <div className={'block_info'}>
            <div className={'days'}>
                <p className={'day1'}></p>
                <p className={'temp1'}></p>
                <p className={'weather1'}></p>
                <p className={'icon1'}></p>
            </div>
            <div className={'days'}>
                <p className={'day2'}></p>
                <p className={'temp2'}></p>
                <p className={'weather2'}></p>
                <p className={'icon2'}></p>
            </div>
            <div className={'days'}>
                <p className={'day3'}></p>
                <p className={'temp3'}></p>
                <p className={'weather3'}></p>
                <p className={'icon3'}></p>
            </div>
            <div className={'days'}>
                <p className={'day4'}></p>
                <p className={'temp4'}></p>
                <p className={'weather4'}></p>
                <p className={'icon4'}></p>
            </div>
            <div className={'days'}>
                <p className={'day5'}></p>
                <p className={'temp5'}></p>
                <p className={'weather5'}></p>
                <p className={'icon5'}></p>
            </div>
        </div>
    )
}


export default FiveDays;