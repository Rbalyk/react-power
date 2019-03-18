import React, {Component} from 'react';
import Menu from './components/Menu';
import logo from './img/logo.svg';
import './App.scss';

class App extends Component {
    render() {
        return (
            <div className="App">
                <div className="main-logo">
                    <img src={logo} alt={logo} className="logo"/>
                </div>

                <Menu/>
            </div>
        );
    };
}

export default App;
