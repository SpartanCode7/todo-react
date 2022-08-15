import React from 'react';
import { useState } from 'react';
import './Body.scss';


function Body() {
  const [todo, setTodo] = useState('');

  const handleChange = event => {
    setTodo(event.target.value);
  };

  const handleClick = event => {
    event.preventDefault();

    // 👇️ value of input field
    console.log('handleClick 👉️', todo);
  };

  return (
    <div className="Cxc__Body">
        <div className="Cxc__form">
            <div className="Cxc__form__inner">
                <input type="text" name="todo" placeholder="Write Todo..." onChange={handleChange} className="Cxc__inserting__field" value={todo} />

         
       
                    {/* onChange={handleChange} */}
                    {/* value={todo}
                    autoComplete="off" */}
        


                <button onClick={handleClick}>Click</button>
            </div>
        </div>
        <div className="Cxc__todo__data">
            <ul className="Cxc__data__list">
                <li>
                  <span className="Cxc__task__detail">{todo}</span>
                  <div className="Cxc__buttons">
                    <span className="Cxc__remove__task Cxc__box"> &#8722; </span>
                    <span className="Cxc__compelete__task Cxc__box"> Status </span>
                  </div>
                </li>
            </ul>
        </div>
    </div>
  ); 
}


export default Body