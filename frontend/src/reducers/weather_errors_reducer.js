import { RECEIVE_WEATHER_ERROR } from "../actions/weather_actions";

const weatherErrorsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WEATHER_ERROR:
            return action.error.responseJSON;
        default:
            return state;
    }
}

export default weatherErrorsReducer;