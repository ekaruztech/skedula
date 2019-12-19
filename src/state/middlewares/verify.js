const verify = ({ getState, dispatch }) => next => action => {
  if (action.payload.failed) {
    return next(action);
  }

  const fetchUser = async value => {
    try {
      const getUser = await fetch("http://127.0.0.1:8080/auth.json");
      const data = await getUser.json();
      const verifyUser = data.user === value.user;
      const verifyPassword = data.password === value.password;
      console.log(data, { verifyUser, verifyPassword });
    } catch (e) {
      return e.message;
    }
  };
  fetchUser(action.payload.data);

  return next(action);
};

export default verify;
