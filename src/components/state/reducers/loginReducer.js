const initialState = {
  userInfo: {}
};

const loginReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case typeName:
      return { ...state, ...payload };

    default:
      return state;
  }
};

export default loginReducer;
