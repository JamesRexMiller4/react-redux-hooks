import React, { Component } from 'react';
import { addTodo } from '../../actions/index';
import { connect } from 'react-redux';
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
      this.props.addTodo(todo);
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

const mapDispatchToProps = (dispatch) => ({
  addTodo: todo => dispatch( addTodo(todo) )
})

const mapStateToProps = () => {
  
}

export default connect(null, mapDispatchToProps)(Form);