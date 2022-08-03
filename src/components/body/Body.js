import React from 'react';
import './Body.scss';

function Body() {
  return (
    <div className="Cxc__Body">
        <div className="Cxc__form">
            <form method="post" action="">
                <div className="Cxc__form__inner">
                    <input type="text" className="Cxc__inserting__field" />
                    <input type="submit" className="Cxc__submit" value="Add" />
                </div>
            </form>
        </div>
        <div className="Cxc__todo__data">
            <ul className="Cxc__data__list">
                <li> 
                  <span className="Cxc__task__detail">Export CoinQuora Post && Import in CoinEdition.</span>
                  <div className="Cxc__buttons">
                    <span className="Cxc__remove__task"> - </span>
                    <span className="Cxc__compelete__task"> Status </span>
                  </div>
                </li> 
            </ul>
        </div>
    </div>
  )
}

export default Body