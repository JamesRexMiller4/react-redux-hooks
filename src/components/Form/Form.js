import React, { useState, useContext } from 'react';
import './Form.scss';
import TodosContext from '../../App';
import Button from 'react-bootstrap/Button';

const Form = () => {
  const [todo, setToDo] = useState('');
  const todos = useContext(TodosContext);

  const generateRandomInt = () => {
    return Math.floor(Math.random() * 200)
  }

  const handleChange = (e) => {
    setToDo(e.target.value);
  }

  const handleSubmit = (e) => {
    // setToDoList([...todos, todo])
  }
  
  return(
    <form className='form'>
      <input id='input' className='todo-input' value={todo} type='text' name='todo' 
      placeholder='Enter new ToDo' autocomplete='off' onChange={handleChange}></input>
      <Button id='button' variant='primary' type='button' 
      onClick={handleSubmit}>➤</Button>
    </form>
  )
}

export default Form;