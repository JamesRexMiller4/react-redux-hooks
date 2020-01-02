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
      todos: [
        {title:'Buy Groceries', id: 1},
        {title:'Practice React', id:2},
        {title:'Drink more Coffee', id:3}]
    }
  }

  updateTodo = (todo) => {
    this.setState({todos: [...this.state.todos, todo]});
  }
  
  removeTodo = (e) => {
    let newState = this.state.todos.filter(todo => todo.id != e.target.parentNode.id)
    this.setState({todos: newState})
  }

  render() {
    return (
      <main className="App">
        <Header />
        <FormBar updateTodo={this.updateTodo}/>
        <ToDoContainer todos={this.state.todos} removeTodo={this.removeTodo}/>
      </main>
    );
  }
}

export default App;
