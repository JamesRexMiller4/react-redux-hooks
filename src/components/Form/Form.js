import React, { Component } from 'react';
import './Form.scss';
import Button from 'react-bootstrap/Button';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }

  handleChange = (e) => {
    e.target.name === 'todo' && this.setState({todo: e.target.value})
    console.log(this.state)
  }

  handleSubmit = (e) => {
    console.log(e.target)
    if (e.target.id === 'button') {
      let todo = this.state.todo
      this.props.updateTodo(todo)
    }
  }

  render() {
    return(
      <form className='form'>
        <input id='input' className='todo-input' type='text' name='todo' placeholder='Enter new ToDo' onChange={this.handleChange}>
        </input>
        <Button id='button' variant='primary' type='button' onClick={(e) => this.handleSubmit(e)}>➤</Button>
      </form>
    )
  }
}

export default Form;