import './States.css';
import React, {useState} from 'react';
import StatePopup from './StatePopup';
import data from './states.json';
import {uppercaseFirstLetter} from '../utils.js';

const statesData = [];

for (let i = 0; i < data.statesInfo.states.length; i++) {
    // Loop through the JSON and make it easier to access
    statesData.push(data.statesInfo.states[i]['@attributes']);
}

function States() {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedState, setSelectedState] = useState("");


    /* TODO:
    * Move selected state to State Manager, clean up data for the state manager
    * Don't pass the whole state data to popup, just give it the abbreviation to lookup
    */
    function handleStateClick(abbr, e) {
        e.preventDefault();
        let stateClicked = statesData.filter(state => state.abbreviation === abbr);
        stateClicked = stateClicked[0];
        setSelectedState(stateClicked);
        setPopupVisible(true);
    }

    function handleClose() {
        setPopupVisible(false);
    }

    const statesList = statesData.map((state) =>
        <li key={state.abbreviation} className="listItem" onClick={(e) => handleStateClick(state.abbreviation, e)}>
            {uppercaseFirstLetter(state.name)}
        </li>
    );
    return (
        <div>
            <h2>States</h2>
            <ul>
            {statesList}
            </ul>
            { popupVisible && <StatePopup closeFunc={handleClose} popupState={selectedState} /> }
        </div>
    );
}

export default States;