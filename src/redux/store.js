import {createStore, applyMiddleware, combineReducers} from 'redux';
import ReduxThunk from 'redux-thunk';

// all reducers
import CounterReducer from './reducers/CounterReducer';

const rootReducer = combineReducers({
  CounterReducer: CounterReducer,
});

const store = createStore(rootReducer, {}, applyMiddleware(ReduxThunk));

export {
  store
}