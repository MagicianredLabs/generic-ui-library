import React, { Fragment } from 'react';
import PropTypes from 'prop-types';

const TodoListItemWrapper = ({
    data,
    onToggleComplete,
    onRemove
}) => {
    return (
        <Fragment>
            {data && (<div className="view">
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
            </div>)}
        </Fragment>
    );
}

TodoListItemWrapper.propTypes = {
    data: PropTypes.object,
    onToggleComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export { TodoListItemWrapper };