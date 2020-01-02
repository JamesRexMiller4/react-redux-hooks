import React, { Component } from 'react';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todo: ''
    }
  }
  render() {
    return(
      <form>
        <input type='text' placeholder='Enter new ToDo'>
        </input>
        <button>➤</button>
      </form>
    )
  }
}

export default Form;