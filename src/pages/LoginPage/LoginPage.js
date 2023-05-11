import React, { useEffect } from "react";
import Login from "../../components/LoginForm/LoginForm";


import "./Login.scss";
const LoginPage = ({isSignIn}) => {



  return (
    <div className="login-container">
      <Login isSignIn={isSignIn} />
    </div>
  );
};

export default LoginPage;
