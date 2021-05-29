import React, { useEffect, useState, useCallback } from 'react';
import TodoListHeader from './TodoListHeader';
import TodoList from './TodoList';
import TodoListFooter from './TodoListFooter';
import TodosService from './../services/TodosService';

const EMPTY_TODO = { title: '', complete: false };

const TodoApp = () => {

    const [hasChange, setHasChange] = useState(false);
    const [todos, setTodos] = useState([]);

    useEffect(() => {
        if(hasChange === true) {
            setTodos(TodosService.getAllTodos());
            setHasChange(false);
        }
    }, [hasChange]);

    const handleAddTodo = (newTodoTitle) => {
        if(newTodoTitle) {
            let todo = { ...EMPTY_TODO };
            todo.title = newTodoTitle;
            TodosService.addTodo(todo);
            setHasChange(true);
        }
    }

    const handleRemoveTodo = (todoIdToRemove) => {
        if(todoIdToRemove) {
            TodosService.deleteTodoById(todoIdToRemove.id);
            setHasChange(true);
        }
    }

    const handleToggleTodoComplete = (todo) => {
        if(todo) {
            TodosService.toggleTodoComplete(todo);
            setHasChange(true);
        }
    }

    return (
        <section className="todoapp">
            
            <TodoListHeader
                onAdd={handleAddTodo}
            ></TodoListHeader>

            {(!todos || (todos && todos.length === 0)) && (<span>no todos</span>)}
            {todos && todos.length > 0 && (<TodoList
                data={todos}
                onToggleComplete={handleToggleTodoComplete}
                onRemove={handleRemoveTodo}
            ></TodoList>)}
                        
            <TodoListFooter
                data={todos}
            ></TodoListFooter>

        </section>
    );
};

export default TodoApp;