import Store from './../store';

// Simulate POST /todos
const addTodo = (todo) => {
    Store.addTodo(todo);
}

// Simulate DELETE /todos/:id
const deleteTodoById = (id) => {
    Store.removeTodoById(id);
}

// Simulate PUT /todos/:id
const updateTodoById = (id, values) => {
    const todo = getTodoById(id);
    if (!todo) {
        return null;
    }
    Object.assign(todo, values);
    return todo;
}

// Simulate GET /todos
const getAllTodos = () => {
    return Store.getTodos();
}

// Simulate GET /todos/:id
const getTodoById = (id) => {
    return Store.getTodos()
        .filter(item => item.id === id)
        .pop();
}

// Toggle todo complete
const toggleTodoComplete = (todo) => {
    let updatedTodo = updateTodoById(todo.id, {
        complete: !todo.complete
    });
    return updatedTodo;
}


/**
 * Service class to handle retrieve of todos data
 */
 export const TodosService = {
    addTodo,
    deleteTodoById,
    updateTodoById,
    getAllTodos,
    getTodoById,
    toggleTodoComplete,
}

export default TodosService