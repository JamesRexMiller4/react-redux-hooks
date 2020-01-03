import React, { useState } from 'react';
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

  const handleSubmit = (e) => {
    dispatch({type: 'ADD_TODO', payload: {title: todo, id: generateRandomInt()}});
    setToDo('');
  }
  
  return(
    <form className='form'>
      <input id='input' className='todo-input' value={todo} type='text' name='todo' 
      placeholder='Enter new ToDo' autoComplete='off' onChange={handleChange}></input>
      <Button id='button' variant='primary' type='button' 
      onClick={(e) => handleSubmit(e)}>➤</Button>
    </form>
  )
}

export default Form;