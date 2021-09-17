import { connect } from "react-redux";
import States from "./States";
import data from '../states.json';

function mapStateToProps(state) {
    const statesData = [];

    for (let i = 0; i < data.statesInfo.states.length; i++) {
        // Loop through the JSON and make it easier to access
        statesData.push(data.statesInfo.states[i]['@attributes']);
    }
    return {
        popup: false,
        states: statesData,
        currState: ""
    }
}

var openAction = { type: "OPEN_POPUP" },
    closeAction = { type: "CLOSE_POPUP" };

function mapDispatchToProps(dispatch) {
    return {
        openPopup: function() {
            return dispatch(openAction);
        },
        closePopup: function() {
            return dispatch(closeAction);
        },
        changeState: function(newState) {
            return dispatch({ type: "CHANGE_STATE", state: newState });
        }
    }
}

var connectedStatesTab = connect(
    mapStateToProps,
    mapDispatchToProps
)(States);

export default connectedStatesTab;