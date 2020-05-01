import { connect } from "react-redux";
import { fetchWeatherByCoords, fetchWeatherByZip } from "../../actions/weather_actions";
import Weather from "./weather";

const mapStateToProps = state => ({
    currentWeather: state.entities.weather
});

const mapDispatchToProps = dispatch => ({
    fetchWeatherByCoords: (lat, lon, unit) => dispatch(fetchWeatherByCoords(lat, lon, unit)),
    fetchWeatherByZip: (zipcode, unit) => dispatch(fetchWeatherByZip(zipcode, unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);