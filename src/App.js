import { Route, Routes, useNavigate } from "react-router";
import "./App.css";
import MainPage from "./components/MainPage";
import NavBar from "./components/NavBar";
import SignIn from "./components/SignIn";
import About from "./components/About";
import Contact from "./components/Contact";
import SignUp from "./components/SignUp";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserAction } from "./reducers/AsyncAuthAction";
import MemberShip from "./components/MemberShip";
import { getAction } from "./reducers/AsyncMemberAction";
function App() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.auth.getUserData);
  // const userSubscription = useSelector((state) => state.bba.subscriptionDetail);


  useEffect(() => {
    dispatch(getUserAction());
  }, []);
  useEffect(() => {
    if (userData) {
      dispatch(getAction(userData.localId));
      console.log(userData.localId);
    }
  }, [userData]);

  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<MainPage />}></Route>
        <Route path="/signin" element={<SignIn />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/membership" element={<MemberShip />}></Route>
      </Routes>
    </div>
  );
}

export default App;
