import { GET_TODO } from "./../constants/index";

const getTodo = payload => ({
  type: GET_TODO,
  payload
});

export default getTodo;
