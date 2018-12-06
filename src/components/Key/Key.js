import React from 'react';

import classes from './Key.module.css';

const Key = ({ icon, char, handleClick }) => (
  <div className={classes.Key} onClick={handleClick}>
    {icon ? <i className="material-icons">{icon}</i> : char}
  </div>
);

export default Key;
