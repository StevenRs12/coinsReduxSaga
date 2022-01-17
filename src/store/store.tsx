import { createStore, combineReducers, compose, applyMiddleware } from "redux";
import { cryptoReducer } from "../reducers/cryptoReducer";
import createSagaMiddleware from "redux-saga";
import { watcherSaga } from "../sagas/rootSaga";

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const sagaMiddleware = createSagaMiddleware();
const middleware = [sagaMiddleware];
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const reducers = combineReducers({
  crypto: cryptoReducer,
});

export const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middleware))
);

sagaMiddleware.run(watcherSaga);
