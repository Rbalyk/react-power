import React from 'react';
import BankListItem from './BankListItem'

const BankCurrencyRender = (props) => {
    const {data} = props;
    return (
        <div className={'bankCurrency'}>
            <h2>Bank</h2>
            {data.map((item) => <BankListItem item={item}/> )}
        </div>
    )
};


export default BankCurrencyRender;