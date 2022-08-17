import React from 'react';
import { useState } from 'react';
import './Body.scss';
import db from './../../firebase';
import firebase from 'firebase';
import { useEffect } from 'react';
// import LoginControl from './../logins/LoginControl';


function Body() {
  
  const [todos, setTodos] = useState(['cx', 'xc']);
  const [input, setInput] = useState('');

    // 👇️ value of input field
  console.log('handleClick 👉️', input);

  const addTodo = (event) => {
      event.preventDefault();

      db.collection('todos').add({
          todo: input,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      setTodos([...todos, input]);
      setInput('');
  }

  useEffect(() => {
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot => {
      // console.log(setTodos(snapshot.docs.map(doc => doc.data())))
      setTodos(snapshot.docs.map(doc => ({ id: doc.id, todo: doc.data().todo })))
    })
  }, [])

  // useEffect(() => {
  //   db.database().ref().on
  // }, [])

  return (
    <div className="Cxc__Body">
        {/* <LoginControl /> */}
        <div className="Cxc__form">
            <div className="Cxc__form__inner">
                <input type="text" name="todo" placeholder="Write Todo..." onChange={event => setInput(event.target.value)} className="Cxc__inserting__field" value={input} />
                <button disabled={!input} type="button" onClick={addTodo}>Click</button>
            </div>
        </div>
        <div className="Cxc__todo__data">
            <ul className="Cxc__data__list">
                  {todos.map(todos => (
                      <li className="Cxc__task__detail"><span className="Cxc__task__text">{todos}</span> 
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