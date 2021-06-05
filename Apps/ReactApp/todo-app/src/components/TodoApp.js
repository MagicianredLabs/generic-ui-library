import React, { useEffect, useState } from 'react';
import TodosService from './../services/TodosService';
import { 
    // TodoListHeaderWrapper as TodoListHeader, 
    TodoListWrapper as TodoList, 
    TodoListFooterWrapper as TodoListFooter 
} from './../TodoLibrary';
import { TodoListHeaderWrapper as TodoListHeader } from './../TodoLibrary/TodoListHeaderWrapper';

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