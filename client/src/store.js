import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import rootReducer from './reducers';

const initialState = {}; // -> Initial State

const middleware = [thunk]; // -> Create an array of middleware to pass in

const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
); // Takes in -> Root Reducer and InitialState and Middleware

export default store;
