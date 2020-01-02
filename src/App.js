import React, {Component} from 'react';
import './App.css';
import Header from './components/Header/Header';
import Form from './components/Form/Form';
import ToDoContainer from './components/ToDoContainer/ToDoContainer'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: ['Buy Groceries', 'Practice React', 'Drink more Coffee']
    }
  }
  render() {
    return (
      <body className="App">
        <Header />
        <Form />
        <ToDoContainer todos={this.state.todos}/>
      </body>
    );
  }
}

export default App;
