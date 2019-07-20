import React, {PureComponent} from "react";

class CurrencyListItem extends PureComponent {
    render(){
        const {item} = this.props;
        return (
            <div>
                <p><span>{item.ccy} </span>to<span> {item.base_ccy}</span></p>
                <p>Buy: <span>{item.buy}</span></p>
                <p>Sale: <span>{item.sale}</span></p>
            </div>
        )
    }

};
export default CurrencyListItem;
