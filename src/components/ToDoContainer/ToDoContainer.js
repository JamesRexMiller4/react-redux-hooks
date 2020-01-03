import React, { useContext } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { TodosContext } from '../../App';
import Completed from '../../components/Completed/Completed';
import './ToDoContainer.scss';

const ToDoContainer = () => {
  const todos = useContext(TodosContext);
  let renderList;
  console.log(todos)

  if (todos.length < 1) {
    renderList = <Completed />
  } else {
    renderList = todos.map(todo => {
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

export default ToDoContainer;