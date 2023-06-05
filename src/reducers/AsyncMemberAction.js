import { createAsyncThunk } from "@reduxjs/toolkit";
import { apiBbaServices } from "../services/ApiBbaServices";

export const postAction = createAsyncThunk(
  "postAction",
  async (data, thunkAPI) => {
    console.log("actionbba");

    const response = await apiBbaServices.postMembership(data);

    setTimeout(() => {
      thunkAPI.dispatch(getAction(data.localId));
    }, 1500);
    console.log(response);
    return response;
  }
);
export const updateMembershipAction = createAsyncThunk(
  "updateMembershipAction",
  async (data, thunkAPI) => {
    console.log("update", data);
    const response = await apiBbaServices.updateMembership(data);
    setTimeout(() => {
        thunkAPI.dispatch(getAction(data.localId));
      }, 1500);
      console.log(response);
  }
);
export const getAction = createAsyncThunk("getAction", async (data,thunkAPI) => {
  console.log("actionbba",data);
  const response = await apiBbaServices.getBbaData(data);
  console.log(response.data);
  return response.data;
});
