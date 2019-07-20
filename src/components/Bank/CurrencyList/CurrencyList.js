import React , {PureComponent} from 'react';
import CurrencyListItem from './CurrencyListItem'

class CurrencyList extends PureComponent {
    render() {
        const {currency} = this.props;

        return (
            <div className={'bankCurrency'}>
                <h2>Bank</h2>
                {currency.map((item) => <CurrencyListItem item={item}/> )}
            </div>
        )
    }
}


export default CurrencyList;
