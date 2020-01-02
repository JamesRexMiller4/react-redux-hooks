import React from 'react';
import './Header.scss';
import Jumbotron from 'react-bootstrap/Jumbotron';

const Header = () => {
  return(
    <Jumbotron fluid className='header'>
      <h1>To-Do List</h1>
    </Jumbotron>
  )
}

export default Header;