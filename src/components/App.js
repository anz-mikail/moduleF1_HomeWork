import React,  { Component, Fragment } from "react";

import "../styles/App.css";
import Header from "./Header";
import OneDay from "./OneDay";
import FiveDays from "./FiveDays";
import CityChange from "./CityChange";
import City_1 from "./City_1";
import City from "./City";
import Button from "./Button";


class App extends Component {
    render() {
        return (
            <Fragment>
                <Header/>
                <CityChange/>
                <City_1/>
                <City/>
                <Button/>
                <OneDay/>
                <FiveDays/>
            </Fragment>
        );
    }
}

export default App;
