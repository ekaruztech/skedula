import { SET_TASK } from "./../constants/index";

const setTask = payload => ({
  type: SET_TASK,
  payload
});

export default setTask;
