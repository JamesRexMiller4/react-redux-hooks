export const todos = (state = [
  {title:'Buy Groceries', id: 1},
  {title:'Practice React', id:2},
  {title:'Drink more Coffee', id:3}], action) => {
  switch (action.type) { 
    case 'ADD_TODO': 
      return [...state, {title: action.todo.title, id: action.todo.id}]

    case 'REMOVE_TODO':
      let newTodos = action.payload.todos.filter(todo => todo.id !== action.payload.id)
      return [...newTodos]

    default: 
      return state
  }
}