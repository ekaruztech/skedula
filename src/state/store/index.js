import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import log from "../middlewares/log";
import validate from "../middlewares/validate";
import verify from "../middlewares/verify";

const middlewares = [validate, verify, log];
const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);

export default store;
