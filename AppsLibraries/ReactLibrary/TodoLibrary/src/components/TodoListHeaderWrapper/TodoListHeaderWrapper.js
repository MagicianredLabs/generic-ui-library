import React, { useState } from 'react';
import PropTypes from 'prop-types';

const TodoListHeaderWrapper = ({
    onAdd
}) => {
    const [value, setValue] = useState('');

    const handleChangeEvent = (event) => {
      setValue(event.target.value);
    }

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            onAdd(value);
            setValue('');
        }
    }

    return (
        <header className="header">
            <h1>Todos</h1>
            <input 
                className="new-todo" 
                placeholder="What needs to be done?" 
                autoFocus="" 
                value={value}
                onChange={handleChangeEvent}
                onKeyUp={handleKeyPress}
            />
        </header>
    );
}

TodoListHeaderWrapper.propTypes = {
    data: PropTypes.object,
    onAdd: PropTypes.func,
};

export { TodoListHeaderWrapper };