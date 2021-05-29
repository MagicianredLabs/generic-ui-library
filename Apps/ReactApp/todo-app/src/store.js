/**
 * A Singleton data store
 */
let _lastId = 0;
let _todos = [];
const getAndSetNewIdentifier = () => {
    return ++_lastId;
}
const handleAddTodo = (todo) => {
    _todos.push(todo);
}
const handleRemoveTodo = (id) => {
    _todos = _todos.filter(item => item.id !== id);
}

const Store = {
    getTodos: () => _todos,
    addTodo: (todo) => {
        todo.id = getAndSetNewIdentifier();
        handleAddTodo(todo);
    },
    removeTodoById: (id) => {
        handleRemoveTodo(id);
    }
};

Object.freeze(Store);
export default Store;