import React, {useState} from "react";

import "../styles/Button.css";
import OneDay from "./OneDay";
import FiveDays from "./FiveDays";


function Select (props) {
    const city = props.city;
    const [selected, changeSelected] = useState(true);

        return (
            <div>
                <button className={selected ? 'Button-1': 'Button-2'} onClick={() => changeSelected(true)}>1 день</button>
                <button className={selected ? 'Button-2': 'Button-1'} onClick={() => changeSelected(false)}>5 дней</button>
                {selected ? <OneDay city={city}/> : <FiveDays city={city}/>}
            </div>
        );
    }

export default Select;