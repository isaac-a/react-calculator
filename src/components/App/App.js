import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import classes from './App.module.css';
import History from '../History/History';
import Calculator from '../Calculator/Calculator';
import * as actions from '../../store/actions';

class App extends Component {
  render() {
    return (
      <Fragment>
        <div className={classes.App}>
          <History
            operations={this.props.operationsHistory}
            clearOperationsHistory={this.props.clearOperationsHistory}
          />
          <div className={classes.Calc}>
            <Calculator />
          </div>
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state => ({
  operationsHistory: state.operationsHistory
});

const mapDispatchToProps = dispatch => ({
  clearOperationsHistory: () => dispatch(actions.clearOperationsHistory())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
