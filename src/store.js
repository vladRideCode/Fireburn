import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import {nav, auth} from './containers/navigation/navigation.reducer';
import { cards } from './containers/card/card.reducer';
import { init } from './containers/login/login.reducer';

const rootReducer = combineReducers({
  nav,
  auth,
  cards,
  init
});

const customMiddleWare = store => next => action => {
  // console.log("Store:", store.getState().init);
  next(action);
}

const store = createStore(rootReducer, applyMiddleware(thunk, customMiddleWare));
console.log(store.getState());
export default store;
