import { SET_ERRORS } from "../constants";
function setErrors(payload) {
  return {
    type: SET_ERRORS,
    payload
  };
}

export default setErrors;
