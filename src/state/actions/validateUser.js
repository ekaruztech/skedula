import { VALIDATE_USER } from "../constants/index";
import setErrors from "./setErrors";
import loginUser from "./loginUser";

const validateUser = payload => ({
  type: VALIDATE_USER,
  payload: {
    data: payload,
    error: setErrors,
    success: loginUser
  }
});

export default validateUser;
