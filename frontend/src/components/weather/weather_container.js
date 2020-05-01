import { connect } from "react-redux";
import { fetchWeatherByCoords } from "../../actions/weather_actions";
import Weather from "./weather";

const mapStateToProps = state => ({
    currentWeather: state.entities.weather
});

const mapDispatchToProps = dispatch => ({
    fetchWeatherByCoords: (lat, lon, unit) => dispatch(fetchWeatherByCoords(lat, lon, unit))
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);