import React, { useReducer, createContext, useContext } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ToDoContainer from './components/ToDoContainer/ToDoContainer';

const todosList = [
  {title: 'Get Groceries', id: 1},
  {title: 'Practice React', id: 2},
  {title: 'Drink more Coffee', id: 3}
];

const reducer = (state = todosList, action = {}) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [...state, {title: action.payload.title, id: action.payload.id}]
    case 'REMOVE_TODO':
      let newState = state.filter(id => id !== action.id)
      return newState
    default:
      return state
  }
}

export const TodosContext = createContext({title: 'Drink more Coffee', id: 3});

export const useStore = () => useContext(TodosContext)

const App = () => {
  const [state, dispatch] = useReducer(reducer, todosList)
  const value = { state, dispatch }

    return (
      <TodosContext.Provider value={value}>
        <main className="App">
        <Header />
        <Form />
        <ToDoContainer />
        </main>
      </TodosContext.Provider>
    );
}

export default App;
