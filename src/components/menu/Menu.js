import React from 'react';
import classes from './Menu.module.css';

const header = (props) => {
  
  return (
    <ul className={classes.Menu}>
      <li className={classes.MenuItem}>
        Главная
      </li>
    </ul>
  )
}

export default header;