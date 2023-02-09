import {INCREASE_COUNTER, DECREASE_COUNTER} from '../types';

const increaseCount = (val) => {
  return dispatch => {
    dispatch({type: INCREASE_COUNTER, payload: val});
  };
};

const decreaseCount = () => dispatch => {
  dispatch({type: DECREASE_COUNTER});
};

export {increaseCount, decreaseCount};
