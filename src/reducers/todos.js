export const todos = (state = [], action) => {
  switch (action.type) { 
    case 'ADD_TODO': 
      return [...state, {title: action.title, id: action.id}]
    default: 
      return state
  }
}