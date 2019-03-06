import React from 'react';

const Form  = (props) => {
    const{weatherMethod} = props;
        return(
            <form
                className={'search'}
                onSubmit={weatherMethod}>
                <input type="text" name={'city'} placeholder={'NAME CITY'}/>
                <button>GO</button>
            </form>
        )

};

export default Form;