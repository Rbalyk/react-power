import React from 'react';

const Weather = (props) => {
    const {city,country,description,icon,temp,sunrise,sunset,wind,humidity,error } = props;
    return(
        <div className={'weatherResult'}>
            { city  &&
            <div>
                <p className={'city'}>{city} , <span>{country}</span></p>
                <p className={'icon'}><span>{description}</span><img src={icon} alt=""/>{temp}&deg;C</p>
                <div className="sun">
                    <p><span>Sunrise: </span>{sunrise}</p>
                    <p><span>Sunset: </span>{sunset}</p>
                </div>
                <div className="wind">
                    <p><span>Wind: {wind}</span> mph</p>
                    <p><span>Humidity: {humidity}</span> %</p>
                </div>


            </div>
            }
            <p>{error}</p>
        </div>
    )
};


export default Weather;