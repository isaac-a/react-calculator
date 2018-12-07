import React from 'react';
import uuid from 'uuid/v1';

import classes from './History.module.css';
import HistoryItem from './HistoryItem/HistoryItem';

const History = ({ operations, clearOperationsHistory }) => {
  return (
    <div className={classes.History}>
      <h3>History</h3>
      <ul>
        {operations.map(operation => (
          <HistoryItem operation={operation} key={uuid()} />
        ))}
      </ul>
      <button onClick={() => clearOperationsHistory()}>Clear</button>
    </div>
  );
};

export default History;
