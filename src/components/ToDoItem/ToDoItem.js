import React from 'react';
import './ToDoItem.scss';
import { useStore } from '../../App';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

const ToDoItem = ({text, id}) => {
  const {state, dispatch} = useStore();

  return (
    <Card className='todo-item-div' id={id}>
      <h2 className='todo-item-title'>{text}</h2>
      <Button variant="info" className="button" type="button"
      onClick={() => dispatch({type: 'REMOVE_TODO', id})}><span role='img' aria-label='x'>❌</span></Button>
    </Card>
  )
}

export default ToDoItem;