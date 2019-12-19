const login = ({ dispatch }) => next => action => {
  if (action.type === "LOGIN_USER") {
    console.log(action);
  }
  return next(action);
};

export default [login];
