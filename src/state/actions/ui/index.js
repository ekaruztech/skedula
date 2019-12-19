import { UPDATE_UI_ERROR } from "../../constants";

export const updateUIError = (...arg) => ({
  type: UPDATE_UI_ERROR,
  payload: {
    key: arg[0],
    data: arg[1]
  }
});
