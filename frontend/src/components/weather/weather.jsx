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
        this.currentTime = this.currentTime.bind(this);
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

    currentDate() {
        const days = ["MON", "TUE", "WED", "THU", "FRI", "SAT", "SUN"]
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let dayOfWeek = days[date.getDay()];
        return dayOfWeek + " " + month + "/" + day;
    }

    currentTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let period = hours < 12 ? "AM" : "PM";
        hours = hours % 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        
        let timeString = hours + ":" + minutes + " " + period;
        return timeString;
    }

    weatherInfo() {
        const { currentWeather } = this.props;
        if (!currentWeather) return null;
        return (
            <div className="weather-info">
                <div className="weather-header">
                    <div className="weather-header-left">
                        <div className="condition">
                            <img className="weather-icon" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}></img>
                            <span>{currentWeather.weather[0].main}</span>
                        </div>
                        <h1 className="temperature">{Math.round(currentWeather.main.temp) + "°F"}</h1>
                    </div>
                    
                    <div className="weather-header-right">
                        <h2 className="time">{this.currentTime()}</h2>
                        <span className="date">{this.currentDate()}</span>
                    </div>

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