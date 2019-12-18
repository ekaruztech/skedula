import {
  GET_USER,
  GET_TODO,
  GET_TASK,
  SET_TASK,
  SET_TODO,
  DELETE_TODO,
  DELETE_TASK
} from "../constants/index";

export const getUser = payload => ({
  type: GET_USER,
  payload
});

export const getTodo = payload => ({
  type: GET_TODO,
  payload
});

export const getTask = payload => ({
  type: GET_TASK,
  payload
});
export const setTask = payload => ({
  type: SET_TASK,
  payload
});

export const setTodo = payload => ({
  type: SET_TODO,
  payload
});

export const deleteTodo = payload => ({
  type: DELETE_TODO,
  payload
});

export const deleteTask = payload => ({
  type: DELETE_TASK,
  payload
});
