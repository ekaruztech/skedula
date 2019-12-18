import { GET_USER } from "./../constants/index";

const getUser = payload => ({
  type: GET_USER,
  payload
});

export default getUser;
