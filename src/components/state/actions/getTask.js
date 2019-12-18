import { GET_TASK } from "./../constants/index";

const getTask = payload => ({
  type: GET_TASK,
  payload
});

export default getTask;
