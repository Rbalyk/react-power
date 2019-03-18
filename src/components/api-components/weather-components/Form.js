import React from 'react';


class Form extends React.Component{
    state = {inputValue: ''};
    changeInputValue = (e) => this.setState({inputValue: e.target.value});
    onSubmit = () => this.props.onSubmit(this.state.inputValue);
    render(){
        return(
            <div className={'search'}>
                <input type="text"
                       placeholder={'NAME CITY'}
                       value={this.state.inputValue}
                       onChange={this.changeInputValue}/>
                <button onClick={this.onSubmit}>GO</button>
            </div>
        )
    }
}


export default Form;
