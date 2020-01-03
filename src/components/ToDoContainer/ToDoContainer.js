import React, { useState, createContext} from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import Completed from '../../components/Completed/Completed';
import './ToDoContainer.scss';

const initialToDoList = [
  {title: 'Get Groceries', id: 1},
  {title: 'Practice React', id: 2},
  {title: 'Drink more Coffee', id: 3}
]
const ToDoContainer = () => {
  const [todoList, setToDoList] =  useState(initialToDoList)
  let renderList;

  if (todoList.length < 1) {
    renderList = <Completed />
  } else {
    renderList = todoList.map(todo => {
      return <ToDoItem 
        text={todo.title} 
        key={todo.id}
        id={todo.id}
      />
    })
  }
  
  return (
    <div className="todo-container">
      {renderList}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default ToDoContainer;