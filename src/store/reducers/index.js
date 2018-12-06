import * as types from '../actions/actionTypes';

const initialState = {
  displayValue: '0',
  value: null,
  operator: null,
  waitingForOperand: false,
  operationsHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.SET_DISPLAY_VALUE:
      return {
        ...state
      };
    case types.SET_VALUE:
      return {
        ...state
      };
    case types.SET_OPERATOR:
      return {
        ...state
      };
    default:
      return state;
  }
};
