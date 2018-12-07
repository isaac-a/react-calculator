import * as types from './actionTypes';

export const addOperationString = operationString => ({
  type: types.ADD_OPERATION_STRING,
  operationString
});

export const clearOperationsHistory = () => ({
  type: types.CLEAR_OPERATIONS_HISTORY
});
