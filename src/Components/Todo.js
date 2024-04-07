import React from 'react';

const Todo = (props) => {
    const {todo,removebyId}=props
    return (
        <div>
          <div className='todo'><p>{todo.name}</p><button onClick={()=>removebyId(todo.id)}><i  className='fa-solid fa-xmark'></i></button></div>
        </div>
    );
}

export default Todo;
