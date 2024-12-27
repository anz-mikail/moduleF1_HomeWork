import React from "react";
import Table from "react-bootstrap/Table";


function OneDay(props) {
    let city_name = props.city;
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city_name}&` +
        'lang=ru&appid=ccdf2d97227ac4a7ed6d3c0780c5d29a')
        .then(function(response) {return response.json();})
        .then(function(data) {
            console.log(data);
            document.querySelector('.temp').innerHTML = Math.round(data.main.temp -273) + '&deg;';
            document.querySelector('.weather').textContent = data.weather[0]['description'];
            document.querySelector('.wind').innerHTML = data.wind['speed'];
            document.querySelector('.icon').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.weather[0]['icon']}.png">`;
        })
        .catch(function() {
        })

    return (
        <Table>
            <tr>
                <td>Температура:</td>
                <td>Скорость ветра:</td>
                <td>Облачность:</td>
                <td></td>
            </tr >
            <tr>
                <td className={'temp'}></td>
                <td className={'wind'}></td>
                <td className={'weather'}></td>
                <td className={'icon'}></td>
            </tr>
        </Table>
    )
}


export default OneDay;