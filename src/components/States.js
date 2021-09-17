import './States.css';
import React, {useState} from 'react';
import StatePopup from './StatePopup';
import {uppercaseFirstLetter} from '../utils.js';



function States(props) {
    const [popupVisible, setPopupVisible] = useState(false);
    const [selectedState, setSelectedState] = useState("");
    console.log(props);

    /* TODO:
    * Move selected state to State Manager, clean up data for the state manager
    * Don't pass the whole state data to popup, just give it the abbreviation to lookup
    */
    function handleStateClick(abbr, e) {
        e.preventDefault();
        let stateClicked = props.states.filter(state => state.abbreviation === abbr);
        stateClicked = stateClicked[0];
        setSelectedState(stateClicked);
        props.changeState(abbr);
        setPopupVisible(true);
    }

    function handleClose() {
        setPopupVisible(false);
    }

    const statesList = props.states.map((state) =>
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