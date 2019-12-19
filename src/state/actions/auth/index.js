import { CREATE_USER, LOGIN_USER } from "../../constants/index";

export const register = payload => ({
  type: CREATE_USER,
  payload
});

export const login = payload => ({
  type: LOGIN_USER,
  payload
});
