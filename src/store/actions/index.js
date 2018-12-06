import * as types from './actionTypes';

export const setDisplayValue = value => ({
  type: types.SET_DISPLAY_VALUE,
  value
});

export const setValue = value => ({
  type: types.SET_VALUE,
  value
});

export const setOperator = operator => ({
  type: types.SET_OPERATOR,
  operator
});
