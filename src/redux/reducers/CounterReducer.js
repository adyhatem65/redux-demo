import {
  INCREASE_COUNTER,
  DECREASE_COUNTER
} from '../types';

const initialState = {
  count: 0,
  name: 'ady'
}

const CounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREASE_COUNTER:
      return {
        ...state,
        count: state.count + action.payload
      }
    case DECREASE_COUNTER:
      return {
        ...state,
        count: state.count - 1
      }
    default:
      return state;
  }
}

export default CounterReducer;