import React,  {useEffect, useState} from "react";
import {getCityList} from "./getCityList";

import "../styles/CityChange.css";


function CityChange ({ onCityChange }){
    const [search, setSearch] = useState("");
    const [cityList, setCityList] = useState([]);

    const handleChange = (event) => {
        const value = event.target.value;
        setSearch(value);

        if (onCityChange) {
            onCityChange(value);
        }
    };

    useEffect(() => {
        getCityList().then((list) => {
            setCityList(list);
        });
    }, []);

    const filteredList = search
        ? cityList.filter((city) =>
            city.name.toUpperCase().startsWith(search.toUpperCase())
        ) : cityList;

    return (
        <div className={'City'}>
            <input
                type="search"
                placeholder="Выберите город"
                list="datalistOptions"
                value={search}
                onChange={handleChange}
            />
            <datalist id="datalistOptions">
                {filteredList.map((city, index) => (
                    <option key={index} value={`${city.name}`}/>
                ))}
            </datalist>
        </div>
    )
}


export default CityChange;