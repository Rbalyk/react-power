import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import Home from '../Home/Home';
import AppWeather from '../Weather/AppWeather';
import Bank from '../Bank/Bank';
import NewYorkTimes from '../NewYorkTimes/NewYorkTimes';
import YouTube from '../YouTube/YouTube';
import AboutMe from '../AboutMe/AboutMe';
import './style.scss';
import logo from "../../images/logo.svg";

const Menu = () => {
    return (
        <Router>
            <div className={'main'}>
                <div className={'navigation'}>
                    <div className="main-logo">
                        <img src={logo} alt={logo} className="logo"/>
                        <span>React by Roman Balyk</span>
                    </div>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/youtube">YouTube</Link>
                        </li>
                        <li>
                            <Link to="/weather">Weather</Link>
                        </li>
                        <li>
                            <Link to="/bank">Currency</Link>
                        </li>
                        <li>
                            <Link to="/newYorkTimes">New York Times</Link>
                        </li>
                        <li>
                            <Link to="/aboutMe">About Me</Link>
                        </li>
                    </ul>
                </div>

                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                    className="switch-wrapper"
                >
                    <Route exact path='/' component={Home}/>
                    <Route path='/weather' component={AppWeather}/>
                    <Route path='/bank' component={Bank}/>
                    <Route path='/newYorkTimes' component={NewYorkTimes}/>
                    <Route path='/youtube' component={YouTube}/>
                    <Route path='/aboutMe' component={AboutMe}/>
                </AnimatedSwitch>
            </div>
        </Router>
    )
};

export default Menu;
