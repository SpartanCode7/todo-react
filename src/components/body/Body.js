import React from 'react';
import { useState } from 'react';
import './Body.scss';


function Body() {
  
  const [todos, setTodos] = useState(['  ','Cx']);
  const [input, setInput] = useState('');

    // 👇️ value of input field
  console.log('handleClick 👉️', input);

  const addTodo = (event) => {
      event.preventDefault();
      setTodos([...todos, input]);
      setInput('');
  }

  return (
    <div className="Cxc__Body">
        <div className="Cxc__form">
            <div className="Cxc__form__inner">
                <input type="text" name="todo" placeholder="Write Todo..." onChange={event => setInput(event.target.value)} className="Cxc__inserting__field" value={input} />
                <button disabled={!input} type="button" onClick={addTodo}>Click</button>
            </div>
        </div>
        <div className="Cxc__todo__data">
            <ul className="Cxc__data__list">
                  {todos.map(todos => (
                      <li className="Cxc__task__detail">{todos} 
                      <div className="Cxc__buttons">
                        <span className="Cxc__remove__task Cxc__box"> &#8722; </span>
                        <span className="Cxc__compelete__task Cxc__box"> Status </span>
                      </div>
                    </li>
                  ))}
            </ul>
        </div>
    </div>
  ); 
}


export default Body