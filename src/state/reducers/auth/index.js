const initialState = {
  isAuthenticated: false,
  id: null,
  token: null
};
export const login = (state = initialState, { type, payload }) => {
  switch (type) {
    case "LOGIN_SUCCESS":
      return { ...state, ...payload };

    default:
      return state;
  }
};
