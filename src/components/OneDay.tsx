import React from "react";

import "../styles/OneDay.css";


function OneDay(props) {
    let city_name = props.city;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&` +
        'lang=ru&appid=ccdf2d97227ac4a7ed6d3c0780c5d29a')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data);
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp - 273) + '&deg;';
            document.querySelector('.weather').textContent = data.weather[0]['description'];
            document.querySelector('.wind').innerHTML = data.wind['speed'];
            document.querySelector('.icon').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}@2x.png">`;
        })
        .catch(function () {
        })

    return(
        <div className={'OneDayTable'}>
            <div>
                <p>Температура:</p>
                <p className={'temp'}></p>
            </div>
            <div>
                <p>Скорость ветра:</p>
                <p className={'wind'}></p>
            </div>
            <div>
                <p>Облачность:</p>
                <p className={'weather'}></p>
            </div>
            <div>
                <p className={'icon'}></p>
            </div>
        </div>
    )
}


export default OneDay;