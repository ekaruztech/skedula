import { combineReducers } from "redux";

import form from "./form";
import { login } from "./auth";
import ui from "./ui";

const reducers = combineReducers({
  auth: login,
  form,
  ui
});

export default reducers;
