import React from 'react';
import PropTypes from 'prop-types';
import TodoListItemWrapper from './../TodoListItemWrapper';

const TodoListWrapper = ({
    data,
    onToggleComplete,
    onRemove
}) => {
    return (
        <section className="main">
            <ul className="todo-list">
                {data.map((item, index) => (
                    <li key={index} className={`${item.completed ? "completed" : ""}`}>
                        <TodoListItemWrapper
                            data={item}
                            onToggleComplete={onToggleComplete}
                            onRemove={onRemove}
                        ></TodoListItemWrapper>
                    </li>
                ))}
            </ul>
        </section>
    );
}

TodoListWrapper.propTypes = {
    data: PropTypes.array,
    onToggleComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export default TodoListWrapper;