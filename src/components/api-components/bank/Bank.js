import React, {Component} from 'react';
import BankCurrencyRender from './BankCurrencyRender'

class Bank extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currency: []
        };
    };

    componentDidMount() {
        this.BankCurrency();
    }

    BankCurrency = async () => {
        const api_url = await fetch(`https://api.privatbank.ua/p24api/pubinfo?json&exchange&coursid=5`);
        const data = await api_url.json();

        this.setState({
            currency: data
        });
    };


    render() {

        return (
            <BankCurrencyRender data={this.state.currency}/>
        )
    }
}

export default Bank;