import { createSlice } from "@reduxjs/toolkit";
import { getUserAction, signInAction } from "./AsyncAuthAction";
// import { getUserProfileAction, userLoginAction } from "./asyncAuthReducer";

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loginUser:undefined,
    isLoggedIn:false,
    getUserData:undefined,
    isMembership:false
  },
  reducers: {
    userLogout(state, action) {
      localStorage.removeItem("idToken");
      state.isLoggedIn=false;
      state.getUserData=undefined
    
    },
    memberShip(state,action){
      state.isMembership=true;
    }
  },
  extraReducers:(builder)=>{
    builder.addCase(signInAction.fulfilled,(state,action)=>{
      const response=action.payload;
      console.log(response)
      state.isLoggedIn=true;
      
      localStorage.setItem('idToken',response.idToken);
    })
    builder.addCase(getUserAction.fulfilled,(state,action)=>{
      const response=action.payload;
      console.log(response);
      state.getUserData=response;
  })
  }
 
});
export default authSlice;
export const authActions = authSlice.actions;