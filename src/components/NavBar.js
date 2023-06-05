import React, { useEffect } from "react";
import "./NavBar.css";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../reducers/AuthSlice";
import { getUserAction } from "../reducers/AsyncAuthAction";

const NavBar = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.isLoggedIn);
  console.log(user);
  useEffect(() => {
    dispatch(getUserAction());
  }, [dispatch]);
 
  const userLoggedIn = useSelector((state) => state.auth.getUserData);
  console.log(userLoggedIn);

  const handleSignIn = () => {
    navigate("/signin");
  };
  const handleAbout = () => {
    navigate("/about");
  };
  const handleHome = () => {
    navigate("/");
  };
  const handleContact = () => {
    navigate("/contact");
  };
  const handleSignUp = () => {
    navigate("/signup");
  };
  const handleLogout = () => {
    dispatch(authActions.userLogout());
    dispatch(getUserAction());
  };
 const handleMembership=()=>{
  console.log('1')
  navigate('/membership')
 }
  return (
    <div className="nav-bar">
      <h1 className="nav-title">BBSports</h1>
      <nav className="nav-nav">
        <ul>
          <li onClick={handleHome}>Home</li>
          <li onClick={handleAbout}>About</li>
          <li onClick={handleContact}>Contact</li>
          <li onClick={handleSignIn}>
            {userLoggedIn ? (
              <li onClick={handleLogout}>Logout</li>
            ) : (
              <li>Sign In</li>
            )}
          </li>
          <li >
            {userLoggedIn ? (
              <li  onClick={handleMembership}>MemberShip</li>
            ) : (
              <li onClick={handleSignUp}>Sign Up</li>
            )}
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
