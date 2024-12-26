import React,  { Component } from "react";

import "../styles/Button.css";
import OneDay from "./OneDay";
import FiveDays from "./FiveDays";


function Button () {
    const handleClick = () => {
        console.log("Click");
    }

        return (
            <div>
                <button className={'Button-1'} onClick={handleClick}>1 день</button>
                <button className={'Button-1'} onClick={handleClick}>5 дней</button>
            </div>
        );
    }

export default Button;