import React from 'react';

const BankCurrencyRender = (props) => {
    const {data} = props;
    return (
        <div className={'bankCurrency'}>
            <h2>Bank</h2>
            {data.map((index) => {
                return (
                    <div>
                        <p><span>{index.ccy} </span>to<span> {index.base_ccy}</span></p>
                        <p>Buy: <span>{index.buy}</span></p>
                        <p>Sale: <span>{index.sale}</span></p>
                    </div>
                )
            })}
        </div>
    )
};


export default BankCurrencyRender;