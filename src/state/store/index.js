import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "../reducers";
import middlewares from "../middlewares";

const persistState = (state, current) => {
  const local = JSON.stringify({ ...current, state });
  localStorage.setItem("sk_persisted", local);
};

const getPersistedState = () => {
  let cached = {};
  if (localStorage.sk_persisted) {
    const item = JSON.parse(localStorage.getItem("sk_persisted"));
    cached = item;
  }
  return cached;
};

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(...middlewares),
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);
// persist state to localstorage;

store.subscribe(() => {
  const { auth } = store.getState();
  const persistedState = getPersistedState();
  persistState(auth, persistedState);
});

export default store;
