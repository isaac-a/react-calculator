import React from 'react';
import classes from './HistoryItem.module.css';

const HistoryItem = ({ operation }) => {
  return <li className={classes.HistoryItem}>{operation}</li>;
};

export default HistoryItem;
