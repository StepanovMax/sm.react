import Menu from '../menu/Menu';
import React from 'react';
import classes from './Header.module.css';

const header = (props) => {
  return (
    <div className={classes.Header}>
      Header
      <Menu />
    </div>
  )
}

export default header;