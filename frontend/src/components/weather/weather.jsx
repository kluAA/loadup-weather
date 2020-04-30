import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
            showWeather: false,
            isLoading: false
        }
        this.getWeather = this.getWeather.bind(this);
    }

    getWeather() {
        if (navigator.geolocation) {
            this.setState({ showButton: false, showWeather: true, isLoading: true})
            // grabs lat, lon coords
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                //api request to fetch current weather data
                this.props.fetchWeatherByCoords(lat, lon)
                    .then(weather => this.setState({isLoading: false}));
            });
        } 
        else {
            console.log("Geolocation is not supported!")
        }
    }

    render() {
        const { showButton, showWeather, isLoading } = this.state;
        
        const currentWeatherBtn = (
            <button className="weather-btn" onClick={this.getWeather}>
                <i className="fas fa-cloud-sun-rain"></i> Current Weather
            </button>
        );

        const loading = (
            <div className="loading">
                <span>Fetching Weather Data</span>
                <div className="spinner">

                </div>
            </div>
        );
 
        return (
            <div className="weather-container">
                { showButton && currentWeatherBtn }
                { isLoading && loading }
            </div>
        );
    }
}

export default Weather;