import { combineReducers, createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import rootSaga from "./sagas";

import locationReducer from "./location/reducer";
import toastReducer from "./toast/reducer";
import searchReducer from "./search/reducer";

const sagaMiddleware = createSagaMiddleware();
const rootReducer = combineReducers({
  toast: toastReducer,
  location: locationReducer,
  search: searchReducer,
});
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

export default store;
