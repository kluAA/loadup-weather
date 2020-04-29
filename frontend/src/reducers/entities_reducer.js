import { combineReducers } from "redux";
import weather from "./weather_reducer";

const entitiesReducer = combineReducers({
    weather
});

export default entitiesReducer;