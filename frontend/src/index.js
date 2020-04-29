import React from 'react';
import ReactDOM from 'react-dom';
import Root from './Root';
import configureStore from './store/store';
import { fetchWeatherByCoords } from "./util/weather_util";

window.Weather = fetchWeatherByCoords;

const store = configureStore();

ReactDOM.render(
  <Root store={store}/>, document.getElementById('root')
);
