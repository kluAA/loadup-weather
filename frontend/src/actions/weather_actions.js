import * as WeatherAPIUtil from "../util/weather_util";
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';

const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
});

export const fetchWeatherByCoords = (lat, lon, unit) => dispatch => {
    return WeatherAPIUtil.fetchWeatherByCoords(lat, lon, unit)
        .then(weather => dispatch(receiveWeather(weather)));
};

export const fetchWeatherByZip = (zipcode, unit) => dispatch => {
    return WeatherAPIUtil.fetchWeatherByZip(zipcode, unit)
        .then(weather => dispatch(receiveWeather(weather)));
};