import React from "react";
import Button from "../element/Button";
import InputFieldLogin from "./InputFieldLogin";

function Login() {
  return (
    <div>
      <h1>This is Login</h1>
      <InputFieldLogin />
      <Button>Login</Button>
    </div>
  );
}

export default Login;
