import React, { useState } from 'react';
import PropTypes from 'prop-types';

TodoForm.propTypes = {
    onSubmit: PropTypes.func,
};

TodoForm.defaultProps = {
    onSubmit: null,
}

function TodoForm(props) {
    const {onSubmit} = props
    const [value,setValue] = useState('');

    function hangleValueChange(e) {
        console.log(e.target.value);
        setValue(e.target.value)
    }

    function handleFormSbmit(e){
        e.preventDefault()
        if(!onSubmit) return;

        const formValues = {
            title: value
        }
        onSubmit(formValues)

        //Reset form
        setValue('')
    }

    return (
        <form onSubmit={handleFormSbmit}>
            <input type="text" value={value} onChange={hangleValueChange}/>
        </form>
    );
}

export default TodoForm;