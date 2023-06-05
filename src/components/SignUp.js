import React, { useState } from 'react';
import './SignIn.css';
import { useDispatch } from 'react-redux';
import { signUpAction } from '../reducers/AsyncAuthAction';
import { useNavigate } from 'react-router';

const SignUp = () => {
  const navigate=useNavigate()
    const dispatch=useDispatch()
    const [userEmail,setUserEmail]=useState('');
    const [userPass,setUserPass]=useState('');
    const handleEmail=(e)=>{
        e.preventDefault();
        setUserEmail(e.target.value);
    }
    const handlePass=(e)=>{
        e.preventDefault();
        setUserPass(e.target.value);
    }
    const handleSignUp=(e)=>{
        e.preventDefault()
        const userObj={
            email:userEmail,
            password:userPass
        }
        console.log(userObj)
        dispatch(signUpAction(userObj))        
        navigate('/signin')
    }
    const signInHandle=()=>{
      navigate('/signin')
    }
  return (
    <div className="sign-in">
      <h2 className="sign-in-title">Sign Up</h2>
      <form onSubmit={handleSignUp} className="sign-in-form">
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email"   onChange={handleEmail} />
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password"  onChange={handlePass} />
        <button type="submit">Sign Up</button>
        <button  onClick={signInHandle}>Already have account! Sign In</button>
      </form>
    </div>
  );
};

export default SignUp;