import React from 'react';
import PropTypes from 'prop-types';

const TodoListFooterWrapper = ({
    data
}) => {
    return (
        <footer className="footer">
            {data && data.length > 0 && (<span 
                className="todo-count">
                <strong>{data.length}</strong>
                {data.length === 1 ? 'item' : 'items'} left
                </span>)}
        </footer>
    );
}

TodoListFooterWrapper.propTypes = {
    data: PropTypes.array,
};

export { TodoListFooterWrapper };