import React from 'react';
import Info from './Info';
import Form from './Form';
import Weather from './Weather'

const API_KEY = '91e78d5995aaa7da41b1960645f4e654';

class AppWeather extends React.Component {

    state = {
        temp: null,
        city: null,
        country: null,
        sunrise: null,
        sunset: null,
        description: null,
        wind: null,
        humidity: null,
        icon: null,
        error: null

    };

    gettingWeather = async (event) => {
        event.preventDefault();
        const city = event.target.elements.city.value;

        if (!city) {
            return this.setState({
                error: 'City name is not correct'
            })
        }
        try {
            const api_url = await
                fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`);
            const data = await api_url.json();
            if (data.cod === 200) {
                const sunset = data.sys.sunset;
                const sunrise = data.sys.sunrise;

                const time = ms => {
                    let date = new Date(ms * 1000),
                        hours = date.getHours(),
                        minutes = "0" + date.getMinutes(),
                        seconds = "0" + date.getSeconds();
                    return hours + ':' + minutes.substr(-2) + ':' + seconds.substr(-2);
                };

                let sunsetTime = time(sunset);
                let sunriseTime = time(sunrise);

                this.setState({
                    temp: data.main.temp,
                    city: data.name,
                    country: data.sys.country,
                    sunrise: sunriseTime,
                    sunset: sunsetTime,
                    description: data.weather[0].description,
                    wind: data.wind.speed,
                    humidity: data.main.humidity,
                    icon: 'http://openweathermap.org/img/w/' + data.weather[0].icon + '.png'
                })
            } else {
                this.setState({
                    error: 'City name is not correct'
                })
            }

        } catch (e) {
            this.setState({
                error: 'City name is not correct'
            })
        }


    };

    render() {
        return (
            <div className={'weather'}>
                <Info/>
                <Form weatherMethod={this.gettingWeather}/>
                <Weather
                    temp={this.state.temp}
                    city={this.state.city}
                    country={this.state.country}
                    sunrise={this.state.sunrise}
                    sunset={this.state.sunset}
                    description={this.state.description}
                    wind={this.state.wind}
                    humidity={this.state.humidity}
                    icon={this.state.icon}
                    error={this.state.error}
                />
            </div>

        );
    }
}

export default AppWeather;