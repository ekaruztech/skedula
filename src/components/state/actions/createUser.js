import { CREATE_USER } from "./../constants/index";

const createUser = payload => ({
  type: CREATE_USER,
  payload
});

export default createUser;
