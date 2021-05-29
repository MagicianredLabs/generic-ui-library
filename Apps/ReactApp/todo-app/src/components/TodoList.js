import React from 'react';
import PropTypes from 'prop-types';
import TodoListItem from './TodoListItem';

const TodoList = ({
    data,
    onToggleComplete,
    onRemove
}) => {
    return (
        <section className="main">
            <ul className="todo-list">
                {data.map((item, index) => (
                    <li key={index} className={`${item.completed ? "completed" : ""}`}>
                        <TodoListItem
                            data={item}
                            onToggleComplete={onToggleComplete}
                            onRemove={onRemove}
                        ></TodoListItem>
                    </li>
                ))}
            </ul>
        </section>
    );
}

TodoList.propTypes = {
    data: PropTypes.array,
    onToggleComplete: PropTypes.func,
    onRemove: PropTypes.func,
};

export default TodoList;