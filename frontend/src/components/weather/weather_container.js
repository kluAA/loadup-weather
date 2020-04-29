import { connect } from "react-redux";
import { fetchWeatherByCoords } from "../../actions/weather_actions";
import Weather from "./weather";

const mapStateToProps = state => ({
    weather: state.entities.weather
});

const mapDispatchToProps = dispatch => ({
    fetchWeatherByCoords: (lat, lon) => dispatch(fetchWeatherByCoords(lat,lon))
});

export default connect(mapStateToProps, mapDispatchToProps)(Weather);