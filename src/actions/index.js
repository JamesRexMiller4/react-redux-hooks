export const addTodo = (todo) => ({
  type: 'ADD_TODO',
  todo
});

export const removeTodo = (id, todos) => ({
  type: 'REMOVE_TODO',
  payload: {id: id, todos: todos}
});