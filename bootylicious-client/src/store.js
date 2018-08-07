// import { composeWithDevTools } from 'redux-devtools-extension';
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, autoRehydrate } from 'redux-persist'
import workouts from './reducers/workouts';
import workoutFormData from './reducers/workoutFormData';

const reducers = combineReducers({
  workouts,
  workoutFormData
});

// const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunk), autoRehydrate()))

const middleware = [thunk];

// var stopLoad
// if (stopLoad == false){
//   persistStore(store)
// }
// stopLoad = false

export default createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
  applyMiddleware(...middleware),
);
