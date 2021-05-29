import React from 'react';
import PropTypes from 'prop-types';

const TodoListFooter = ({
    data
}) => {
    return (
        <footer className="footer">
            {data.length > 0 && (<span 
                className="todo-count">
                <strong>{data.length}</strong>
                {data.length === 1 ? 'item' : 'items'} left
                </span>)}
        </footer>
    );
}

TodoListFooter.propTypes = {
    data: PropTypes.array,
};

export default TodoListFooter;