import { LOGIN_USER } from "./../constants/index";

const loginUser = payload => ({
  type: LOGIN_USER,
  payload
});

export default loginUser;
