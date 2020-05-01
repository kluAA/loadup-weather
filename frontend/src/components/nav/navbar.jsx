import React from 'react';
import logo from "./logo.png";

class NavBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="nav-wrapper">
                <nav className="nav-top">
                    <p className="nt-left">
                        Nationwide Junk Removal
                        <span className="sep">|</span>
                        <a href="http://goloadup.com/cities"><i className="fas fa-map-marker-alt"></i> Find My City <i className="fas fa-chevron-right"></i></a>
                    </p>
                </nav>
                <nav className="nav-bottom">
                    <div className="logo-container">
                        <img className="logo" src={logo}></img>
                    </div>
                    <div className="challenge">
                        <h1>Weather App Challenge</h1>
                    </div>
                </nav>
            </div>
        )
    }
}

export default NavBar;