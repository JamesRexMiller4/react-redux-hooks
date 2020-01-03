import React, { useContext } from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import { useStore } from '../../App';
import Completed from '../../components/Completed/Completed';
import './ToDoContainer.scss';

const ToDoContainer = () => {
  const {state, dispatch } = useStore()
  let renderList;

  if (state.length < 1) {
    renderList = <Completed />
  } else {
    renderList = state.map(todo => {
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