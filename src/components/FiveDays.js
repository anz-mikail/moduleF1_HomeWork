import React from "react";
import Table from "react-bootstrap/Table";


function FiveDays(props) {
    let city_name = props.city;
    fetch(`http://api.openweathermap.org/data/2.5/forecast?q=${city_name}&` +
        'lang=ru&appid=ccdf2d97227ac4a7ed6d3c0780c5d29a')
        .then(function(response) {return response.json();})
        .then(function(data) {
            console.log(data.list);
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
                `<img src="https://openweathermap.org/img/wn/${data.list[6].weather[0]['icon']}.png">`;
            document.querySelector('.icon2').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[14].weather[0]['icon']}.png">`;
            document.querySelector('.icon3').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[22].weather[0]['icon']}.png">`;
            document.querySelector('.icon4').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[30].weather[0]['icon']}.png">`;
            document.querySelector('.icon5').innerHTML =
                `<img src="https://openweathermap.org/img/wn/${data.list[38].weather[0]['icon']}.png">`;
            document.querySelector('.day1').textContent = data.list[6].dt_txt.slice(5, 10);
            document.querySelector('.day2').textContent = data.list[14].dt_txt.slice(5, 10);
            document.querySelector('.day3').textContent = data.list[22].dt_txt.slice(5, 10);
            document.querySelector('.day4').textContent = data.list[30].dt_txt.slice(5, 10);
            document.querySelector('.day5').textContent = data.list[38].dt_txt.slice(5, 10);
            document.querySelector('.time1').textContent = data.list[6].dt_txt.slice(10, 16);
            document.querySelector('.time2').textContent = data.list[14].dt_txt.slice(10, 16);
            document.querySelector('.time3').textContent = data.list[22].dt_txt.slice(10, 16);
            document.querySelector('.time4').textContent = data.list[30].dt_txt.slice(10, 16);
            document.querySelector('.time5').textContent = data.list[38].dt_txt.slice(10, 16);
        })
        .catch(function() {
        })
    return (
        <Table>
            <tr>
                <td>Дата:</td>
                <td>Время:</td>
                <td>Температура:</td>
                <td></td>
                <td>Облачность:</td>
            </tr>
            <tr>
                <td className={'day1'}></td>
                <td className={'time1'}></td>
                <td className={'temp1'}></td>
                <td className={'icon1'}></td>
                <td className={'weather1'}></td>
            </tr>
            <tr>
                <td className={'day2'}></td>
                <td className={'time2'}></td>
                <td className={'temp2'}></td>
                <td className={'icon2'}></td>
                <td className={'weather2'}></td>
            </tr>
            <tr>
                <td className={'day3'}></td>
                <td className={'time3'}></td>
                <td className={'temp3'}></td>
                <td className={'icon3'}></td>
                <td className={'weather3'}></td>
            </tr>
            <tr>
                <td className={'day4'}></td>
                <td className={'time4'}></td>
                <td className={'temp4'}></td>
                <td className={'icon4'}></td>
                <td className={'weather4'}></td>
            </tr>
            <tr>
                <td className={'day5'}></td>
                <td className={'time5'}></td>
                <td className={'temp5'}></td>
                <td className={'icon5'}></td>
                <td className={'weather5'}></td>
            </tr>
        </Table>
    )
}


export default FiveDays;