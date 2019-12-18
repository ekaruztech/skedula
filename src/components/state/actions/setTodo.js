import { SET_TODO } from "./../constants/index";

const setTodo = payload => ({
  type: SET_TODO,
  payload
});

export default setTodo;
