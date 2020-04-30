import * as WeatherAPIUtil from "../util/weather_util";
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
});

export const fetchWeatherByCoords = (lat, lon) => dispatch => {
    return WeatherAPIUtil.fetchWeatherByCoords(lat, lon)
        .then(weather => dispatch(receiveWeather(weather)));
};