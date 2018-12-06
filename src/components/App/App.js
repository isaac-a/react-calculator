import React, { Component, Fragment } from 'react';

import classes from './App.module.css';
import Calculator from '../Calculator/Calculator';

class App extends Component {
  render() {
    return (
      <Fragment>
        <header className={classes.Header}>
          <h1>React and Redux Calculator</h1>
        </header>
        <div className={classes.App}>
          <Calculator />
        </div>
      </Fragment>
    );
  }
}

export default App;
