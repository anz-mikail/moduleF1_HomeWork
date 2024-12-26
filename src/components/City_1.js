import React, {useState} from "react";

import CityChange from "./CityChange";


const City_1 = () =>{
    const [selectedCity, setSelectedCity] = useState("");

    const handleCityChange = (city) => {
        setSelectedCity(city); // Фиксируем выбранный город
    };

    return (
        <div>
            <h1>Выбранный город: {selectedCity}</h1>
            <CityChange onCityChange={handleCityChange} />
        </div>
    );

}

export default City_1;


// const City_1 = (props) =>{
//     const city_id = props.name
//     console.log(city_id);
//     if (city_id == undefined) {
//         return 'moscow'
//     } else {
//         return city_id
//     }
// }


// const City_1 = (props) =>{
//     if (props.name === undefined) {
//         return 'grozny'
//     } else {
//         const city_id = props.name
//         console.log(city_id);
//         return city_id
//     }
// }