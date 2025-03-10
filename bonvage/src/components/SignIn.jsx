import React from "react";
import InputField from "./InputField";
import SocialMedia from "./SocialMedia";

const SignIn = () => {
  return (
    <form className="sign-in-form">
      <h2 className="title">Sign in</h2>
      <InputField icon="fas fa-user" placeholder="Username" type="text" />
      <InputField icon="fas fa-lock" placeholder="Password" type="password" />
      <input type="submit" value="Login" className="btn solid" />
      <p className="social-text">Or Sign in with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignIn;
