import { updateUIError } from "./../actions/ui/index";
import { setSubmitFailed, validateForm } from "./../actions/form/index";
import { filterAndDelete } from "./../utils";

const saveForm = ({ dispatch }) => next => action => {
  const currentAction = action.type;
  next(action);
  if (currentAction === "SAVE_FORM_DATA") {
    const { data, type } = action.payload;
    dispatch(
      validateForm({
        key: action.key,
        payload: {
          data: data[type]
        },
        onSuccess: "SAVE_FORM_DATA",
        onError: "SET_UI_ERROR",
        type: type
      })
    );
  }
};
const formValidation = ({ dispatch }) => next => action => {
  const currentAction = action.type;

  if (currentAction === "VALIDATE_FORM") {
    const Errors = {
      email: type => {
        const err = {
          unsupported: "Invalid email address!",
          empty: "Please enter your email address!"
        };
        return err[type];
      },
      password: type => {
        const err = {
          short: "Password must contain atleast 6 characters!",
          uppercase:
            "Password must contain atleast one uppercase (A-Z) letter!",
          lowercase: "Password must contain atleast on lowercase (a-z) letter!",
          number: "Password must contain atleast on number (0-9)!",
          different: misc => `Password must be different from ${misc}!`,
          confirm: "Password must be the same!",
          empty: "Please enter your password!"
        };
        return err[type];
      },
      username: type => {
        const err = {
          blank: "Username cannot be blank!",
          length: "Username must contain atleast 3 characters!",
          unsupported:
            "Username must contain only letters, numbers and underscores!"
        };
        return err[type];
      }
    };

    const verifyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const shortPassword = value => value.length < 6;
    const empty = value => value.length <= 0;

    const { payload, onError, key, type } = action.meta;

    if (key === "login") {
      dispatch(setSubmitFailed({ key, data: false }));

      if (type instanceof Array) {
        const { data } = payload;
        type.map(value => {
          dispatch(updateUIError(value, null));
          validate(value, data[value]);
          return 1;
        });
      } else if (Object.prototype.toString.call(type) === "[object String]") {
        const { data } = payload;
        dispatch(updateUIError(type, null));
        validate(type, data);
      }

      function validate(type, data) {
        if (type === "email") {
          const email = verifyEmail.test(data);
          const blankEmail = empty(data);
          if (email === false || blankEmail) {
            const message = {
              email: blankEmail
                ? Errors.email("empty")
                : !email
                ? Errors.email("unsupported")
                : null
            };
            const filterMessage =
              message.email === null
                ? filterAndDelete(message, "email")
                : message;

            dispatch({
              type: onError,
              key: type,
              payload: { data: filterMessage }
            });
          }
        }
        if (type === "password") {
          const blankPassword = empty(data);
          const passwordLen = shortPassword(data);

          if (blankPassword || passwordLen) {
            const message = {
              password: blankPassword
                ? Errors.password("empty")
                : passwordLen
                ? Errors.password("short")
                : null
            };
            const filterMessage =
              message.password === null
                ? filterAndDelete(message, "password")
                : message;
            dispatch({
              type: onError,
              key: type,
              payload: { data: filterMessage }
            });
          }
        }
      }
    }
  }
  if (currentAction === "SET_UI_ERROR") {
    dispatch(setSubmitFailed({ key: "login", data: true }));
  }

  return next(action);
};

export default [formValidation, saveForm];
