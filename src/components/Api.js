import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import AppWeather from '../components/api-components/weather-components/AppWeather';
import NewYorkTimes from "../components/api-components/new-york-times-components/NewYorkTimes";
import Bank from "../components/api-components/bank/Bank";

const Api = ({match}) => {
    return (
        <Router>
            <div className={'content-submenu'}>
                <div className="submenuWrapper">
                    <ul className={'submenu'}>
                        <li>
                            <Link to={`${match.url}/weather`}>Weather API</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/new-york-times`}>New York Times API</Link>
                        </li>
                        <li>
                            <Link to={`${match.url}/bank`}>Currency</Link>
                        </li>
                    </ul>
                </div>

                <AnimatedSwitch
                    atEnter={{opacity: 0}}
                    atLeave={{opacity: 0}}
                    atActive={{opacity: 1}}
                    className="switch-wrapper"
                >
                    <Route path={`${match.url}/weather`} component={AppWeather}/>
                    <Route path={`${match.url}/bank`} component={Bank}/>
                    <Route path={`${match.url}/new-york-times`} component={NewYorkTimes}/>
                    <Route
                        exact
                        path={match.path}
                        render={() => <div className={'content'}><h2>Please select a topic.</h2></div>}
                    />
                </AnimatedSwitch>
            </div>
        </Router>
    )
};


export default Api;