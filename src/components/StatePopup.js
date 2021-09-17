import './StatePopup.css';
import React from 'react';
import {uppercaseFirstLetter} from '../utils.js';

/*
TODO:
* Make a "shade" behind the popup
* Improve positioning
* If "shade" is clicked, close the popup
*/

function StatePopup(props) {
    let theState = props.popupState;

    let imgStr = "https://www.50states.com/images/redesign/flags/" + theState.abbreviation.toLowerCase() + "-largeflag.png"

    console.log(props);
    console.log("popupState", theState);

    function handleXClick(e) {
        e.preventDefault();
        props.closeFunc();
    }

    let timezones;
    if (theState['time-zone-2']) {
        timezones = `${theState['time-zone-1']} and ${theState['time-zone-2']}`;
    } else {
        timezones = `${theState['time-zone-1']}`;
    }

    return (
        <div className="popup">
            <button onClick={(e) => handleXClick(e)}>X</button>
            <div className="stateDetails">
                <div className="stateFlag">
                    <img src={imgStr} />
                </div>
                <b>Name: </b> {uppercaseFirstLetter(theState.name)}<br />
                <b>Abbreviation: </b> {theState.abbreviation}<br />
                <b>Capital: </b> {theState.capital}<br />
                <b>On DST?: </b> {theState.dst}<br />
                <b>Most Populous City: </b> {theState['most-populous-city']}<br />
                <b>Population: </b> {theState.population}<br />
                <b>Square Miles: </b> {theState['square-miles']}<br />
                <b>{theState['time-zone-2'] ? "Time Zones: " : "Time Zone: "}</b> {timezones}

            </div>

        </div>
    );
}

export default StatePopup;