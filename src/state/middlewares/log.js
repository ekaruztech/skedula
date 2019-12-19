const logger = ({ getState, dispatch }) => next => action => {
  console.log("ACTION: ", action.type, action.payload || action.meta);
  next(action);
};
export default logger;
