import React from 'react';
import Loading from "../main/loading";

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            showButton: true,
            showWeather: false,
            isLoading: false,
            moreDetails: false,
            unit: "imperial",
            zipcode: ""
        }
        this.getWeather = this.getWeather.bind(this);
        this.getWeatherByZip = this.getWeatherByZip.bind(this);
        this.currentTime = this.currentTime.bind(this);
        this.setUnit = this.setUnit.bind(this);
    }


    getWeather(e) {
        e.preventDefault();
        if (navigator.geolocation) {
            this.setState({ showButton: false, showWeather: false, isLoading: true})
            // grabs lat, lon coords
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;

                //api request to fetch current weather data
                this.props.fetchWeatherByCoords(lat, lon, this.state.unit)
                    .then(() => this.setState({isLoading: false, showWeather: true}))
            });
        } 
        else {
            console.log("Geolocation is not supported!")
        }
    }

    getWeatherByZip(e) {
        e.preventDefault();
        if (!this.state.zipcode) return;
        this.setState({ isLoading: true });
        this.props.fetchWeatherByZip(this.state.zipcode, this.state.unit)
            .then(() => { 
                if (!this.props.currentWeather.main) {
                    //chaining fix to check if there is an error during initial search screen
                    this.setState({ showButton: true, isLoading: false })
                } else {
                    this.setState({isLoading: false, showWeather: true, showButton: false, zipcode: ""})
                }
            })
    }

    currentDate() {
        const days = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"];
        let date = new Date();
        let month = date.getMonth() + 1;
        let day = date.getDate();
        let dayOfWeek = days[date.getDay()];
        return dayOfWeek + " " + month + "/" + day;
    }

    getUpdatedDate(dt) {
        //to convert UNIX date multipy by 1000
        return new Date(dt * 1000).toTimeString();
    }

    currentTime() {
        let time = new Date();
        let hours = time.getHours();
        let minutes = time.getMinutes();
        let period = hours < 12 ? "AM" : "PM";
        hours = hours % 12 === 0 ? 12 : hours % 12;
        minutes = minutes < 10 ? "0" + minutes : minutes;
        
        let timeString = hours + ":" + minutes + " " + period;
        return timeString;
    }

    setUnit(unit) {
        return e => {
            e.preventDefault();
            this.setState({ unit: unit }, this.getWeather(e))
        }
    }

    returnUnit(type) {
        const { unit } = this.state;
        switch(type) {
            case "temp":
                return unit === "imperial" ? "°F" : "°C";
            case "wind":
                return unit === "imperial" ? "mph" : "m/s";
            default:
                return;
        }
    }

    statusMessage(id) {
        const firstDigit = id.toString()[0];
        const prefix = `A status of ${firstDigit}xx indicates`
        switch(firstDigit) {
            case '8':
                return `${prefix} good weather. Services should be operating without any problems from weather.`;
            case '7':
                return `${prefix} potentially dangerous weather. Please stay indoors. Services are most likely closed.`;
            case '6':
                return `${prefix} snowy weather. Services may be disrupted or additional fees for priority service.`;
            case '5':
                return `${prefix} rainy weather. Services may be disrupted or additional fees for priority service.`;
            // there are no 4xx status codes
            case '3':
                return `${prefix} drizzling weather. Services should be operating without any problems.`;
            case '2':
                return `${prefix} thunderstorms in the area. Services may be disrupted. Please stay indoors.`;
            default:
                return `Something went wrong here.`
        }
    }

    weatherInfo() {
        const { currentWeather, errorMsg } = this.props;
        const { moreDetails, unit, zipcode } = this.state;
        if (!currentWeather.main) {
     
            return null;
        }
        return (
            <div className="weather-wrapper">
                <div className="weather-info">
                    <section className="weather-header">
                        <div className="weather-header-left">
                            <div className="condition">
                                <img className="weather-icon" src={`http://openweathermap.org/img/wn/${currentWeather.weather[0].icon}@2x.png`}></img>
                                <span>{currentWeather.weather[0].main}</span>
                            </div>
                            <h1 className="temperature">{Math.round(currentWeather.main.temp) + this.returnUnit("temp")}</h1>
                        </div>
                        
                        <div className="weather-header-right">
                            <h2 className="time">{this.currentTime()}</h2>
                            <span className="date">{this.currentDate()}</span>
                            <span className="location">
                                {currentWeather.name + ", " + currentWeather.sys.country}
                            </span>
                        </div>
                    </section>

                    <section 
                        className="weather-details"
                        onClick={e => this.setState({ moreDetails: !this.state.moreDetails })}
                        id={moreDetails ? "more-details" : null}
                    >
                        <h1 className="title">Details</h1>
                        <h2>{currentWeather.weather[0].description}</h2>
                        <h3>FeelsLike® {Math.round(currentWeather.main.feels_like) + this.returnUnit("temp")}{}</h3>
                        <h4>Humidity <span className="details-value">{currentWeather.main.humidity}</span>%</h4>
                        <h4>Wind Speed <span className="details-value">{currentWeather.wind.speed}</span> {this.returnUnit("wind")}</h4>
                        { moreDetails && 
                        <React.Fragment>
                                <h4>Wind Direction <span className="details-value">{currentWeather.wind.deg}</span>°</h4>
                                <h4>Atmospheric Pressure <span className="details-value">{currentWeather.main.pressure}</span> hpa</h4>
                                <h4>Lon: <span className="details-value">{currentWeather.coord.lon}</span>°
                                    Lat: <span className="details-value">{currentWeather.coord.lat}</span>°
                                </h4>
                                <h4>Min Temp <span className="details-value">{currentWeather.main.temp_min}</span>{this.returnUnit("temp")}</h4>
                                <h4>Max Temp <span className="details-value">{currentWeather.main.temp_max}</span>{this.returnUnit("temp")}</h4>
                        </React.Fragment>
                        }
                        <div id="details">{moreDetails ? "less details" : "more details"} <i className="far fa-arrow-alt-circle-right"></i></div>
                    </section>

                    <section className="status">
                        <h1 className="title">Status - <span id="code">{currentWeather.weather[0].id}</span></h1>
                        <p>{this.statusMessage(currentWeather.weather[0].id)}</p>
                    </section>
                    
                    <section className="update">
                        <div className="update-header">
                            <h1 className="title">Update</h1>
                            <button className="resync"
                                onClick={this.getWeather}
                            >
                                <i className="fas fa-sync-alt"></i>
                            </button>
                        </div>
                        <p>OpenWeather API data for this location was last updated at <i>{this.getUpdatedDate(currentWeather.dt)}</i></p>
                    </section>

                    <section className="settings">
                        <div className="settings-header">
                            <h1 className="title">Settings</h1>
                            <button id={unit === "imperial" ? "btn-active" : null} onClick={this.setUnit("imperial")}>Imperial</button>
                            <button id={unit === "metric" ? "btn-active" : null} onClick={this.setUnit("metric")}>Metric</button>
                        </div>
                    </section>
                </div>
                <section className="zipcode-container">
                    <div className="zipcode">
                        <h1 className="title">Use Zipcode</h1>
                        <div className="search">
                            <input type="text" 
                                placeholder="Enter US Zipcode"
                                value={zipcode}
                                onChange={e => this.setState({ zipcode: e.target.value })}
                            />
                            <button onClick={this.getWeatherByZip} className="search-btn">
                                <i className="fas fa-search"></i>
                            </button>
                        </div>
                    </div>
                    {errorMsg && <span className="zip-error">{errorMsg}</span>}
                </section>
            </div>
        )
    }

    render() {
        const { showButton, showWeather, isLoading, zipcode } = this.state;
        const { currentWeather, errorMsg } = this.props;
        const currentWeatherBtn = (
            <div className="check-weather">
                <h1>Check Online</h1>
                <h2>Click on the button below to check weather conditions in your area.</h2>
                <button className="weather-btn" onClick={this.getWeather}>
                    <i className="fas fa-cloud-sun-rain"></i> Current Weather
                </button>
                <h2>Geolocation not enabled? Enter zip code instead!</h2>
                <div className="search">
                    <input type="text"
                        placeholder="Enter US Zipcode"
                        value={zipcode}
                        onChange={e => this.setState({ zipcode: e.target.value })}
                    />
                    <button onClick={this.getWeatherByZip} className="search-btn green">
                        <i className="fas fa-search"></i>
                    </button>
                </div>
                { errorMsg && <span className="zip-error">{errorMsg}</span> }
            </div>
        );
 
        return (
            <div className="weather-container"
                id={currentWeather.weather ? "default-bg" : null}
            >
                { showButton && currentWeatherBtn }
                { isLoading && <Loading /> }
                { showWeather && this.weatherInfo()}
            </div>
        );
    }
}

export default Weather;