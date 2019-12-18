import { DELETE_TODO } from "./../constants/index";

const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload
});

export default deleteTodo;
