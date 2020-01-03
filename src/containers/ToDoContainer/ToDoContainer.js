import React from 'react';
import ToDoItem from '../ToDoItem/ToDoItem';
import Completed from '../../components/Completed/Completed';
import { connect } from 'react-redux';
import './ToDoContainer.scss';

const ToDoContainer = ({todos, removeTodo}) => {
  let todoList;

  if (todos.length < 1) {
    todoList = <Completed />
  } else {
    todoList = todos.map(todo => {
    return <ToDoItem 
      text={todo.title} 
      key={todo.id}
      id={todo.id}
      removeTodo={removeTodo}
    />
  })
}
  
  return (
    <div className="todo-container">
      {todoList}
    </div>
  )
}

const mapStateToProps = (state) => ({
  todos: state.todos
});

export default connect(mapStateToProps)(ToDoContainer);