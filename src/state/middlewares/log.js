const middleware = ({ getState, dispatch }) => next => action => {
  console.log("Action: ", action.type, action.payload);
  next(action);
};
export default middleware;
