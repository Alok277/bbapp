import { createSlice } from "@reduxjs/toolkit";
import { getAction } from "./AsyncMemberAction";

// import { getUserProfileAction, userLoginAction } from "./asyncAuthReducer";

const bbaSlice = createSlice({
  name: "bba",
  initialState: {
    subscriptionDetail: [],
  },
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getAction.fulfilled, (state, action) => {
      const response = action.payload;
      console.log(response);
      const getArray = [];
      for (const key in response) {
        console.log(key.email)
        getArray.push({
          email: response[key].email,
          memberShipActive:response[key].memberShipActive,
          membershipActiveTill:response[key].membershipActiveTill,
          membershipStartDate: response[key].membershipStartDate,
          price: response[key].price,
          key:key
        });
      }
      state.subscriptionDetail = getArray;
      // console.log(action.payload)
    });
  },
});
export default bbaSlice;
export const bbaActions = bbaSlice.actions;
