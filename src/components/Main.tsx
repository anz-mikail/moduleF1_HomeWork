import React, {useState} from "react";

import CityChange from "./CityChange";
import Select from "./Select";

import "../styles/Main.css";


function Main () {
    const [selectedCity, setSelectedCity] = useState("");
    const handleCityChange = (city) => {
        setSelectedCity(city); // Фиксируем выбранный город
    };

    return (
        <main>
            <div>
                <CityChange onCityChange={handleCityChange}/>
            </div>
            <div>
                <Select city={selectedCity}/>
            </div>
        </main>
    );
}


export default Main;


