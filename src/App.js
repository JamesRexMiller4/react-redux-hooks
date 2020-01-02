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

  updateTodo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]})
  }
  


  render() {
    return (
      <body className="App">
        <Header />
        <Form updateTodo={this.updateTodo}/>
        <ToDoContainer todos={this.state.todos}/>
      </body>
    );
  }
}

export default App;
