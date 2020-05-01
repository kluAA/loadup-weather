import React from 'react';

function Loading(props) {
    return (
        <div className="loading">
            <span>Fetching Weather Data</span>
            <div className="spinner"></div>
        </div>
    )
}

export default Loading;