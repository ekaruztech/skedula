const initialState = {
  login: {
    failed: false,
    type: "login",
    errors: {
      user: {
        failed: false,
        message: ""
      },
      password: {
        failed: false,
        message: ""
      }
    }
  },
  register: {
    failed: false
  }
};
const errorReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case "SET_ERRORS":
      return { ...state, [payload.type]: { ...payload } };
    default:
      return state;
  }
};

export default errorReducer;
