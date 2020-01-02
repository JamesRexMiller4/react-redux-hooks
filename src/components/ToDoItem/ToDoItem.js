import React from 'react';
import './ToDoItem.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const ToDoItem = ({text, id, removeTodo}) => {
  return (
    <Card className='todo-item-div' id={id}>
      <h2 className='todo-item-title'>{text}</h2>
      <Button variant="info" className="button" type="button"
      onClick={() => removeTodo(id)}><span role='img' aria-label='x'>❌</span></Button>
    </Card>
  )
}

export default ToDoItem;