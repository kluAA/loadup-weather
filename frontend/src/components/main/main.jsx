import React from 'react';
import NavBar from "../nav/navbar";
import WeatherContainer from "../weather/weather_container";
import Footer from "../footer/footer";

class Main extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <NavBar />
                <WeatherContainer />
                <Footer />
            </div>
        )
    }
}

export default Main;