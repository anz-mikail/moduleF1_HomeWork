import React, {useState} from "react";

import CityChange from "./CityChange";
import Select from "./Select";

import "../styles/Main.css";


const Main = () =>{
    const [selectedCity, setSelectedCity] = useState("");

    const handleCityChange = (city) => {
        setSelectedCity(city); // Фиксируем выбранный город
    };

    return (
        <main>
            <div className={'div1'}>
                <CityChange onCityChange={handleCityChange}/>
                <p>Город: {selectedCity}</p>
            </div>
            <div className={'div2'}>
                <Select city={selectedCity}/>
            </div>
        </main>
);

}

export default Main;


