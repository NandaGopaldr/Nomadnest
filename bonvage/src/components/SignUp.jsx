import React from "react";
import InputField from "./InputField";
import SocialMedia from "./SocialMedia";

const SignUp = () => {
  return (
    <form className="sign-up-form">
      <h2 className="title">Sign up</h2>
      <InputField icon="fas fa-user" placeholder="Username" type="text" />
      <InputField icon="fas fa-envelope" placeholder="Email" type="email" />
      <InputField icon="fas fa-lock" placeholder="Password" type="password" />
      <input type="submit" value="Sign Up" className="btn solid" />
      <p className="social-text">Or Sign up with social platforms</p>
      <SocialMedia />
    </form>
  );
};

export default SignUp;
