import { SAVE_FORM_DATA, SET_SUBMIT_FAILED } from "./../../constants/index";

const initialState = {
  login: {
    values: {
      email: "",
      password: ""
    },
    initial: {
      email: "akpanudosimeon@yahoo.com",
      password: "123456"
    },
    submitFailed: false
  },
  register: {
    values: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    initial: {
      email: "",
      password: "",
      confirmPassword: ""
    },
    submitFailed: false
  }
};

export default (state = initialState, action) => {
  switch (action.type) {
    case SAVE_FORM_DATA:
      return {
        ...state,
        [action.key]: {
          ...state[action.key],
          values: {
            ...state[action.key].values,
            ...action.payload.data
          }
        }
      };
    case SET_SUBMIT_FAILED:
      return {
        ...state,
        [action.payload.key]: {
          ...state[action.payload.key],
          submitFailed: action.payload.data
        }
      };

    default:
      return state;
  }
};
