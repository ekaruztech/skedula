import { DELETE_TASK } from "./../constants/index";

const deleteTask = payload => ({
  type: DELETE_TASK,
  payload
});

export default deleteTask;
