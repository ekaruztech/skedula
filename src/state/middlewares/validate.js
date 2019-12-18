const middleware = ({ getState, dispatch }) => next => action => {
  const currentAction = action.type;
  if (currentAction !== "VALIDATE_USER" && currentAction !== "CREATE_USER") {
    return next(action);
  }

  // eslint-disable-next-line no-control-regex

  const Errors = {
    email: type => {
      const err = {
        unsupported: "Invalid email address!"
      };
      return err[type];
    },
    password: type => {
      const err = {
        length: "Password must contain atleast 6 characters!",
        uppercase: "Password must contain atleast one uppercase (A-Z) letter!",
        lowercase: "Password must contain atleast on lowercase (a-z) letter!",
        number: "Password must contain atleast on number (0-9)!",
        different: misc => `Password must be different from ${misc}!`,
        confirm: "Password must be the same!"
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

  const validate = (value, actionType) => {
    const verifyEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    const passwordLen = value => value.length >= 6;
    const passwordLowercase = /[a-z]/g;
    const passwordUppercase = /[A-Z]/g;
    const passwordNumbers = /[0-9]/g;

    const usernameLen = value => value.length >= 3;
    const empty = value => value.length <= 0;
    const usernameTypes = value => /^\w+$/g.test(value);

    const validateUser = (type, value) => {
      return type === "email"
        ? verifyEmail.test(value)
          ? { failed: false, message: "" }
          : { failed: true, message: Errors.email("unsupported") }
        : empty(value)
        ? { failed: true, message: Errors.username("blank") }
        : usernameLen(value)
        ? { failed: false, message: "" }
        : { failed: true, message: Errors.username("length") };
    };

    if (actionType === "VALIDATE_USER") {
      const { user, password } = value;
      const getUserType = verifyEmail.test(user) ? "email" : "username";
      const validUser = validateUser(getUserType, user);
      const validPassword = passwordLen(password)
        ? { failed: false, message: "" }
        : { failed: true, message: Errors.password("length") };

      const errorValues = {
        type: "login",
        failed: validPassword.failed === true || validUser.failed === true,
        errors: { user: validUser, password: validPassword }
      };
      return validPassword.failed === true || validUser.failed === true
        ? errorValues
        : { errorValues, value };
    }
  };
  const result = validate(action.payload.data, currentAction);

  if (result.failed) {
    dispatch(action.payload.error(result));
  } else {
    console.log("PASSED", action, result.value);
    dispatch(action.payload.error(result.errorValues));
    dispatch(action.payload.success(result.value));
  }

  next(action);
};

export default middleware;
