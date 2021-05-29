import React from 'react';
import PropTypes from 'prop-types';

const TodoListItem = ({
    data,
    onToggleComplete,
    onRemove
}) => {
    return (
        <div className="view">
            <input 
                className="toggle" 
                type="checkbox" 
                onClick={() => onToggleComplete(data)}
                value={data.complete}
                />
            <label>{data.title}</label>
            <button 
                className="destroy"
                onClick={() => onRemove(data)}
                ></button>
        </div>
    );
}

TodoListItem.propTypes = {
    data: PropTypes.object,
    onToggleComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export default TodoListItem;