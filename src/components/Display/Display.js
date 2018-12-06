import React from 'react';

import classes from './Display.module.css';

const Display = ({ displayValue }) => {
  return <div className={classes.Display}>{displayValue}</div>;
};

export default Display;
