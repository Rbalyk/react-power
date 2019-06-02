import React from 'react';
import {BrowserRouter as Router, Link, Route} from "react-router-dom";
import {AnimatedSwitch} from 'react-router-transition';
import About from '../components/About';
import Contact from '../components/Contact';
import Home from '../components/Home';
import Api from '../components/Api';


const Menu = () => {
    return (
        <Router>
            <div className={'main'}>
                <div className={'navigation'}>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/api">API</Link>
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
                    <Route path='/about' component={About}/>
                    <Route path='/api' component={Api}/>
                    <Route path='/contact' component={Contact}/>
                </AnimatedSwitch>
            </div>
        </Router>
    )
};

export default Menu;