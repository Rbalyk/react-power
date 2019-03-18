import React from "react";

const BankListItem = (props) => {
    const {item} = props;
    return (
        <div>
            <p><span>{item.ccy} </span>to<span> {item.base_ccy}</span></p>
            <p>Buy: <span>{item.buy}</span></p>
            <p>Sale: <span>{item.sale}</span></p>
        </div>
    )
};
export default BankListItem;