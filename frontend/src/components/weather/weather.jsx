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
            this.setState({ showButton: false, showWeather: false, isLoading: true})
            // grabs lat, lon coords
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                //api request to fetch current weather data
                this.props.fetchWeatherByCoords(lat, lon)
                    .then(weather => this.setState({isLoading: false, showWeather: true}));
            });
        } 
        else {
            console.log("Geolocation is not supported!")
        }
    }

    weatherInfo() {
        const { currentWeather } = this.props;
        if (!currentWeather) return null;
        return (
            <div className="weather-info">
                {/* <h1 className="city">
                    {currentWeather.name}
                </h1> */}
                <div className="weather-header">
                    <div className="condition">
                        <img className="weather-icon" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}></img>
                        <span>{currentWeather.weather[0].main}</span>
                    </div>
                    <h1 className="temperature">{Math.round(currentWeather.main.temp) + "°F"}</h1>
          

                </div>
            </div>

        )
    }

    render() {
        const { showButton, showWeather, isLoading } = this.state;
        const { currentWeather } = this.props;
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
            <div className="weather-container"
                id={currentWeather.weather ? "raining" : null}
            >
                { showButton && currentWeatherBtn }
                { isLoading && loading }
                { showWeather && this.weatherInfo()}
            </div>
        );
    }
}

export default Weather;