import React, {Component} from 'react';
import CurrencyList from './CurrencyList/CurrencyList'
import './style.scss';
import {fetchCurrencyData} from "../../actions/bank";
import {connect} from "react-redux";

class Bank extends Component {

    componentDidMount(){
        const { fetchBankData } = this.props;
        fetchBankData();
    };

    render() {
        const { currency } = this.props;

        if ( !currency ) {
            return <div>Loading...</div>;
        }

        return (
            <CurrencyList currency = { currency }/>
        )
    }
}
const mapStateToProps = state => {
    return {
        currency: state.currency
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchBankData: response => dispatch(fetchCurrencyData(response))
    }
};

export default connect(mapStateToProps,mapDispatchToProps)(Bank);
