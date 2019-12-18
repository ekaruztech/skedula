import { combineReducers } from "redux";
import errorReducer from "./errorReducer";
import loginReducer from "./loginReducer";

const reducers = combineReducers({
  errors: errorReducer,
  userInfo: loginReducer
});

export default reducers;
