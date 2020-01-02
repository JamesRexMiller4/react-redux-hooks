import React from 'react';
import ToDoItem from '../../components/ToDoItem/ToDoItem';
import { connect } from 'react-redux';
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

const mapStateToProps = (state) => ({
  todos: state.todos
})

export default connect(mapStateToProps)(ToDoContainer);