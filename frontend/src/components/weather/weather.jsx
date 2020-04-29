import React from 'react';

class Weather extends React.Component {
    constructor(props) {
        super(props);
        this.getLocation = this.getLocation.bind(this);
    }

    getLocation(e) {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                console.log(lat, lon);
            });
        } 
        else {
            console.log("Geolocation is not supported!")
        }
    }

    render() {
        return (
            <div>
                This is the weather.
                <button onClick={this.getLocation}>Get Location</button>
            </div>
        )
    }
}

export default Weather;