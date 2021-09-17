import data from './states.json';

function stateTab(state, action) {
    if (state === undefined) {

        const statesData = [];

        for (let i = 0; i < data.statesInfo.states.length; i++) {
            // Loop through the JSON and make it easier to access
            statesData.push(data.statesInfo.states[i]['@attributes']);
        }

        return {
            popup: false,
            states: statesData,
            currState: ""
        };
    }

    var popup = state.popup;

    switch(action.type) {
        case "OPEN_POPUP":
            return { 
                ...state,
                popup: true };
        case "CLOSE_POPUP":
            return {
                ...state,
                popup: false };
        case "CHANGE_STATE":
            return {
                ...state,
                currState: action.newState };
        default:
            return state;
    }
}

export default stateTab;