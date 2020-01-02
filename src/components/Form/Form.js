import React, { Component } from 'react';

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
      <form>
        <input id='input' type='text' name='todo' placeholder='Enter new ToDo' onChange={this.handleChange}>
        </input>
        <button id='button' type='button' onClick={(e) => this.handleSubmit(e)}>➤</button>
      </form>
    )
  }
}

export default Form;