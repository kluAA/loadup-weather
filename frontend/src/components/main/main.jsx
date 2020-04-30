import React from 'react';
import WeatherContainer from "../weather/weather_container";


class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="main">
                <WeatherContainer />           
            </div>
        )
    }
}

export default Main;