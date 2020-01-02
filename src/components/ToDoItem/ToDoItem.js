import React from 'react';

const ToDoItem = ({text}) => {
  return (
    <div>
      <h2>{text}</h2>
      <button>❌</button>
    </div>
  )
}

export default ToDoItem;