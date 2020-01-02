import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';

const ToDoContainer = ({todos}) => {
  const todoList = todos.map(todo => {
    return <ToDoItem text={todo} />
  })
  return (
    <div>
      {todoList}
    </div>
  )
}

export default ToDoContainer;