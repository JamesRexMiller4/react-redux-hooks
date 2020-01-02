import React, {Component} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import FormBar from './components/Form/Form';
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
        <FormBar updateTodo={this.updateTodo}/>
        <ToDoContainer todos={this.state.todos}/>
      </body>
    );
  }
}

export default App;
