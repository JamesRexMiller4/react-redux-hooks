import React, { Component } from 'react';
import './Form.scss';
import Button from 'react-bootstrap/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ""
    }
  }

  generateRandomInt = () => {
    return Math.floor(Math.random() * 200)
  }

  handleChange = (e) => {
    e.target.name === 'todo' && this.setState({todo: e.target.value});
  }

  handleSubmit = (e) => {
    if (e.target.id === 'button') {
      let todo = {title: this.state.todo, id: this.generateRandomInt()}
      this.props.updateTodo(todo);
      e.target.parentNode.reset();
    }
  }
  

  render() {
    return(
      <form className='form'>
        <input id='input' className='todo-input' type='text' name='todo' 
        placeholder='Enter new ToDo' autocomplete='off' onChange={this.handleChange}></input>
        <Button id='button' variant='primary' type='button' 
        onClick={(e) => this.handleSubmit(e)}>➤</Button>
      </form>
    )
  }
}

export default Form;