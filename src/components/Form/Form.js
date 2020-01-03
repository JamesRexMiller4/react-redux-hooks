import React, { useState, useContext } from 'react';
import './Form.scss';
import { useStore } from '../../App';
import Button from 'react-bootstrap/Button';

const Form = () => {
  const [todo, setToDo] = useState('');
  const {state, dispatch} = useStore();

  const generateRandomInt = () => {
    return Math.floor(Math.random() * 200)
  }

  const handleChange = (e) => {
    setToDo(e.target.value);
  }
  
  return(
    <form className='form'>
      <input id='input' className='todo-input' value={todo} type='text' name='todo' 
      placeholder='Enter new ToDo' autocomplete='off' onChange={handleChange}></input>
      <Button id='button' variant='primary' type='button' 
      onClick={() => dispatch({type: 'ADD_TODO', payload: {title: todo, id: generateRandomInt()}})}>➤</Button>
    </form>
  )
}

export default Form;