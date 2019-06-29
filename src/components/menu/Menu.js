import React from 'react';
import classes from './Menu.module.css';

const menu = (props) => {
  return (
    <ul className={classes.Menu}>
      <li className={classes.MenuItem}>
        <a href="" className={classes.MenuLink}>
          Главная
        </a>
      </li>
      <li className={classes.MenuItem}>
        <a href="" className={classes.MenuLink}>
          Контакты
        </a>
      </li>
    </ul>
  )
}

export default menu;