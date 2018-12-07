import * as types from '../actions/actionTypes';

const initialState = {
  operationsHistory: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_OPERATION_STRING:
      return {
        ...state,
        operationsHistory: [
          ...state.operationsHistory,
          action.operationString
        ]
      };
    case types.CLEAR_OPERATIONS_HISTORY:
      return {
        ...state,
        operationsHistory: []
      };
    default:
      return state;
  }
};
