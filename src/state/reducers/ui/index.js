import { filterAndDelete } from "../../utils";

const initialState = {
  errors: {}
};

const uiReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_UI_ERROR":
      return {
        ...state,
        errors: {
          ...state.errors,
          [action.key]: action.payload.data[action.key]
        }
      };
    case "UPDATE_UI_ERROR":
      return {
        ...state,
        errors:
          action.payload.data === null
            ? filterAndDelete(state.errors, action.payload.key)
            : {
                ...state.errors,
                [action.payload.key]: {
                  ...state.errors[action.key],
                  ...action.payload.data
                }
              }
      };

    default:
      return state;
  }
};

export default uiReducer;
