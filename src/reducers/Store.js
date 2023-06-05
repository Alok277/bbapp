import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./AuthSlice";
import bbaSlice from "./MemberSlice";

const Store=configureStore({
    reducer:{auth:authSlice.reducer,bba:bbaSlice.reducer}
})
export default Store;