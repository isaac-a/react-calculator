import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import Display from '../Display/Display';
import Key from '../Key/Key';
import * as actions from '../../store/actions';
import classes from './Calculator.module.css';

class Calculator extends Component {
  state = {
    displayValue: '0',
    operator: null,
    value: null,
    waitingForOperand: false
  };

  clear() {
    this.setState({
      displayValue: '0',
      operator: null,
      value: null,
      waitingForOperand: false
    });
  }

  inputDigit(digit) {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({
        displayValue: String(digit),
        waitingForOperand: false
      });
    } else {
      const value =
        displayValue === '0' ? String(digit) : displayValue + digit;
      this.setState({
        displayValue: value
      });
    }
  }

  inputDot() {
    const { displayValue, waitingForOperand } = this.state;

    if (waitingForOperand) {
      this.setState({ displayValue: '.', waitingForOperand: false });
    } else if (displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: displayValue + '.',
        waitingForOperand: false
      });
    }
  }

  togglePM() {
    const { displayValue } = this.state;
    this.setState({ displayValue: String(displayValue * -1) });
  }

  calcPercent() {
    const { displayValue } = this.state;
    this.setState({ displayValue: String(displayValue / 100) });
  }

  evaluate(nextOperator) {
    const { displayValue, value, operator } = this.state;
    const currentValue = parseFloat(displayValue);

    if (operator === '=' && nextOperator === '=') return;

    const operations = {
      '+': (prevVal, currVal) => prevVal + currVal,
      '-': (prevVal, currVal) => prevVal - currVal,
      '*': (prevVal, currVal) => prevVal * currVal,
      '/': (prevVal, currVal) => prevVal / currVal,
      '=': (prevVal, currVal) => currVal
    };

    if (value === null) {
      this.setState({ value: currentValue });
    } else if (operator) {
      const prevVal = value || 0;
      const result = operations[operator](prevVal, currentValue);
      const operationString = `${prevVal} ${operator} ${currentValue} = ${result}`;

      this.setState({
        displayValue: String(result),
        value: result
      });

      this.props.addOperationString(operationString);
    }

    this.setState({ waitingForOperand: true, operator: nextOperator });
  }

  render() {
    return (
      <Fragment>
        <Display displayValue={this.state.displayValue} />
        <div className={classes.Keys}>
          <Key char="C" handleClick={() => this.clear()} />
          <Key char="±" handleClick={() => this.togglePM()} />
          <Key char="%" handleClick={() => this.calcPercent()} />
          <Key char="÷" handleClick={() => this.evaluate('/')} />
          <Key char="7" handleClick={() => this.inputDigit(7)} />
          <Key char="8" handleClick={() => this.inputDigit(8)} />
          <Key char="9" handleClick={() => this.inputDigit(9)} />
          <Key char="x" handleClick={() => this.evaluate('*')} />
          <Key char="4" handleClick={() => this.inputDigit(4)} />
          <Key char="5" handleClick={() => this.inputDigit(5)} />
          <Key char="6" handleClick={() => this.inputDigit(6)} />
          <Key char="-" handleClick={() => this.evaluate('-')} />
          <Key char="1" handleClick={() => this.inputDigit(1)} />
          <Key char="2" handleClick={() => this.inputDigit(2)} />
          <Key char="3" handleClick={() => this.inputDigit(3)} />
          <Key char="+" handleClick={() => this.evaluate('+')} />
          <Key char="0" handleClick={() => this.inputDigit(0)} />
          <Key char="." handleClick={() => this.inputDot()} />
          <Key char="=" handleClick={() => this.evaluate('=')} />
        </div>
      </Fragment>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  addOperationString: operationString =>
    dispatch(actions.addOperationString(operationString))
});

export default connect(
  null,
  mapDispatchToProps
)(Calculator);
