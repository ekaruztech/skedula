import React from "react";
import { User } from "styled-icons/boxicons-regular/User";
import { LockPassword } from "styled-icons/remix-line/LockPassword";
import InputField from "../element/InputField";
import IconStyle from "../element/IconStyle";

function Login() {
  return (
    <div>
      <div style={{ marginBottom: "10px" }}>
        <IconStyle>
          <User size="20" />
        </IconStyle>
        <InputField placeholder="Username or email" />
      </div>
      <div>
        <IconStyle>
          <LockPassword size="20" />
        </IconStyle>
        <InputField placeholder="Password" />
      </div>
    </div>
  );
}

export default Login;
