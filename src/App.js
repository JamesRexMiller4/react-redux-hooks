import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header/Header';
import FormBar from './components/Form/Form';
import ToDoContainer from './components/ToDoContainer/ToDoContainer';

const App = () => {
    return (
      <main className="App">
        <Header />
        <FormBar />
        <ToDoContainer />
      </main>
    );
}

export default App;
