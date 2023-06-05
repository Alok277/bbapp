import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiAuthServices } from "../services/ApiAuthServices";

export const signUpAction=createAsyncThunk(
    'signUpAction',
    async (data,thunkApi)=>{
        console.log(data);
        const response=await apiAuthServices.signup(data);
        return response;
    }
);
export const signInAction=createAsyncThunk(
    'signInAction',
    async (data,thunkApi)=>{
        console.log(data,'in');
        const response=await apiAuthServices.signin(data);
        setTimeout(() => {
            thunkApi.dispatch(getUserAction());
          }, 1000);
        console.log(response)
        return response;
    }
);
export const getUserAction=createAsyncThunk(
    'getUserAction',
    async (data,thunkApi)=>{
        console.log(data,'get');
        const response=await apiAuthServices.getData(data);
        console.log(response)
        return response.users[0];
    }
);
