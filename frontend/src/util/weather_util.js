import * as $ from 'jquery';

//goes to express route instead of directly to open weather api
//so that api key can be stored in backend for security
export const fetchWeatherByCoords = (lat, lon, unit) => {
    return $.ajax({
        url: `/api/weather/bycoords`,
        method: "GET",
        data: { lat, lon, unit}
    })
}
