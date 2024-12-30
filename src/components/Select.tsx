import React, {useState} from "react";

import "../styles/Select.css";
import OneDay from "./OneDay";
import FiveDays from "./FiveDays";


function Select (props) {
    const city = props.city;
    const [selected, changeSelected] = useState(true);

        return (
            <div>
                <div className={'Selects'}>
                <button className={selected ? 'Button-1': 'Button-2'} onClick={() => changeSelected(true)}>Сегодня</button>
                <button className={selected ? 'Button-2': 'Button-1'} onClick={() => changeSelected(false)}>5 дней</button>
                </div>
                <div>
                {selected ? <OneDay city={city}/> : <FiveDays city={city}/>}
                </div>
            </div>
        );
    }


export default Select;