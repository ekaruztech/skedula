import {
  VALIDATE_FORM,
  SAVE_FORM_DATA,
  SET_SUBMIT_FAILED
} from "./../../constants/index";

export const validateForm = meta => ({
  type: VALIDATE_FORM,
  meta
});

export const saveFormData = payload => ({
  type: SAVE_FORM_DATA,
  key: payload.key,
  payload: {
    data: payload.data,
    type: payload.type
  }
});

export const setSubmitFailed = payload => ({
  type: SET_SUBMIT_FAILED,
  payload
});

/*

form({
  onSuccess: API,
  key: "login",
  onError: UI_ERROR,
  redirect: "/dashboard",
  payload, action.payload,
  method: "post",
  headers: null,
  url: null,
});



*/
