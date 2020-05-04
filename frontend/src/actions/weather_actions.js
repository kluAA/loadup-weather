import * as WeatherAPIUtil from "../util/weather_util";
export const RECEIVE_WEATHER = 'RECEIVE_WEATHER';
export const RECEIVE_WEATHER_ERROR = 'RECEIVE_WEATHER_ERROR';

const receiveWeather = weather => ({
    type: RECEIVE_WEATHER,
    weather
});

const receiveWeatherError = error => ({
    type: RECEIVE_WEATHER_ERROR,
    error
})

export const fetchWeatherByCoords = (lat, lon, unit) => dispatch => {
    return WeatherAPIUtil.fetchWeatherByCoords(lat, lon, unit)
        .then(weather => dispatch(receiveWeather(weather)))
        .catch(err => dispatch(receiveWeatherError(err)));
};

export const fetchWeatherByZip = (zipcode, unit) => dispatch => {
    return WeatherAPIUtil.fetchWeatherByZip(zipcode, unit)
        .then(weather => dispatch(receiveWeather(weather)))
        .catch(err => dispatch(receiveWeatherError(err)));
};