import { RECEIVE_WEATHER_ERROR, RECEIVE_WEATHER } from "../actions/weather_actions";

const weatherErrorsReducer = (state={}, action) => {
    Object.freeze(state);
    switch(action.type) {
        case RECEIVE_WEATHER_ERROR:
            return action.error.responseJSON;
        case RECEIVE_WEATHER:
            //receiving weather means request was a success
            //so previous errors should be cleared
            return {};
        default:
            return state;
    }
}

export default weatherErrorsReducer;