import { CREATE_USER } from "./../constants/index";

const initialState = {
  registration: {
    username: "",
    email: "",
    password: ""
  }
};

const createUserReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case CREATE_USER:
      return { ...state, ...payload };

    default:
      return state;
  }
};
export default createUserReducer;
