import React from 'react';
import './Header.scss';

function Header(props) {
  return (
    <div className="Header">
        <h1>{props.val}</h1>
    </div>
  )
}

export default Header