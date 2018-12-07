import reducer from './index';
import * as types from '../actions/actionTypes';

describe('Reducer', () => {
  it('has a default state', () => {
    expect(reducer(undefined, { type: 'unexpected' })).toEqual({
      operationsHistory: []
    });
  });

  it('can handle ADD_OPERATION_STRING', () => {
    expect(
      reducer(undefined, {
        type: types.ADD_OPERATION_STRING,
        operationString: 'New operation'
      })
    ).toEqual({
      operationsHistory: ['New operation']
    });
  });

  it('can handle CLEAR_OPERATIONS_HISTORY', () => {
    expect(
      reducer(
        { operationsHistory: ['operation 1', 'operation 2'] },
        {
          type: types.CLEAR_OPERATIONS_HISTORY
        }
      )
    ).toEqual({
      operationsHistory: []
    });
  });
});
