const initialState = {
  user: "",
  password: ""
};
const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_USER":
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default loginReducer;
