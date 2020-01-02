import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import './ToDoContainer.scss';

const ToDoContainer = ({todos, removeTodo}) => {
  const todoList = todos.map(todo => {
    return <ToDoItem 
      text={todo.title} 
      key={todo.id}
      id={todo.id}
      removeTodo={removeTodo}
    />
  })
  return (
    <div className="todo-container">
      {todoList}
    </div>
  )
}

export default ToDoContainer;