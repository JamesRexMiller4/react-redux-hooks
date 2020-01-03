import React from 'react';
import './ToDoItem.scss';
import Card from 'react-bootstrap/Card';
import { connect } from 'react-redux';
import { removeTodo } from '../../actions';
import Button from 'react-bootstrap/Button';

const ToDoItem = ({text, id, removeTodo, todos}) => {
  return (
    <Card className='todo-item-div' id={id}>
      <h2 className='todo-item-title'>{text}</h2>
      <Button variant="info" className="button" type="button"
      onClick={() => removeTodo(id, todos)}><span role='img' aria-label='x'>❌</span></Button>
    </Card>
  )
}

const mapDispatchToProps = dispatch => ({
  removeTodo: (id, todos) => dispatch( removeTodo(id, todos) )
});

const mapStateToProps = state => ({
  todos: state.todos,
  removeTodo: state.removeTodo
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDoItem);