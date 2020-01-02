import React from 'react';
import './ToDoItem.scss';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button'

const ToDoItem = ({text}) => {
  return (
    <Card className='todo-item-div'>
      <h2 className='todo-item-title'>{text}</h2>
      <Button variant="info" className="button">❌</Button>
    </Card>
  )
}

export default ToDoItem;