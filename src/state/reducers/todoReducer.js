import {
  ADD_TODO,
  ADD_TASK,
  GET_TODO,
  GET_TASK,
  SET_TASK,
  SET_TODO,
  DELETE_TODO,
  DELETE_TASK
} from "../constants/index";

const initialState = {
  todo: [],
  task: []
};

export default function todoReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todo: [action.payload, ...state.todo]
      };
    case ADD_TASK:
      return {
        ...state,
        task: [action.payload, ...state.task]
      };
    case GET_TODO:
      return {
        ...state,
        todo: action.payload
      };
    case GET_TASK:
      return {
        ...state,
        task: action.payload
      };
    case SET_TASK:
      return {
        ...state,
        task: [action.payload, ...state.task]
      };
    case SET_TODO:
      return {
        ...state,
        todo: [action.payload, ...state.todo]
      };
    case DELETE_TODO:
      return {
        ...state,
        todo: state.todo.filter(todo => todo.id !== action.id)
      };
    case DELETE_TASK:
      return {
        ...state,
        task: state.task.filter(task => task.id !== action.id)
      };
    default:
      return state;
  }
}
