import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoContainer.scss';

const ToDoContainer = ({todos}) => {
  const todoList = todos.map(todo => {
    return <ToDoItem text={todo} />
  })
  return (
    <div className="todo-container">
      {todoList}
    </div>
  )
}

export default ToDoContainer;