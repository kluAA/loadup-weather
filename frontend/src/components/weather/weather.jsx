import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather() {
        if (navigator.geolocation) {
            // grabs lat, lon coords
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                //api request to fetch current weather data
                this.props.fetchWeatherByCoords(lat, lon)
                    .then(weather => console.log(weather));
            });
        } 
        else {
            console.log("Geolocation is not supported!")
        }
    }

    render() {
        return (
            <div>
                <button className="weather-btn" onClick={this.getWeather}>Current Weather</button>
            </div>
        )
    }
}

export default Weather;