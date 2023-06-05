import React, { useState } from "react";
import "./SignIn.css";
import { useDispatch, useSelector } from "react-redux";
import { signInAction } from "../reducers/AsyncAuthAction";
import { useNavigate } from "react-router";


const SignIn = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.getUserData);
  console.log(user);
  if (user) {
    navigate("/");
    dispatch()   
  }

  const [userEmail, setUserEmail] = useState("");
  const [userPass, setUserPass] = useState("");
  const handleEmail = (e) => {
    e.preventDefault();
    setUserEmail(e.target.value);
  };
  const handlePass = (e) => {
    e.preventDefault();
    setUserPass(e.target.value);
  };
  const handleSignIn = (e) => {
    e.preventDefault();
    const userObj = {
      email: userEmail,
      password: userPass,
    };
    console.log(userObj);
    dispatch(signInAction(userObj));
  };
  const signUpHandle = () => {
    navigate("/signup");
  };
  return (
    <div className="sign-in">
      <h2 className="sign-in-title">Sign In</h2>
      <form onSubmit={handleSignIn} className="sign-in-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" onChange={handleEmail} />
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          onChange={handlePass}
        />
        <button type="submit">Sign In</button>
        <button className="child-button" onClick={signUpHandle}>
          Create new Account
        </button>
      </form>
    </div>
  );
};

export default SignIn;
