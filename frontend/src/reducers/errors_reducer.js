import { combineReducers } from "redux";
import weatherErrorsReducer from "./weather_errors_reducer";

const errorsReducer = combineReducers({
    weather: weatherErrorsReducer
})

export default errorsReducer;