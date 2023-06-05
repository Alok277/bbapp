import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useDispatch, useSelector } from "react-redux";
import {
  postAction,
  updateMembershipAction,
} from "../reducers/AsyncMemberAction";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { styled } from "@mui/material/styles";

const MemberShip = () => {
  const userData = useSelector((state) => state.auth.getUserData);
  const subscriptionDetail = useSelector(
    (state) => state.bba.subscriptionDetail
  );

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  }));
  console.log(subscriptionDetail);
  const dispatch = useDispatch();
  let currentDate = new Date();
  const options = { day: "2-digit", month: "2-digit", year: "numeric" };
  const formatDate1 = currentDate.toLocaleString("en-GB", options);

  console.log(currentDate.getMonth());

  const OneMonthHandle = () => {
    if (subscriptionDetail[0] !== undefined) {
      const formattedDate = subscriptionDetail[0].membershipActiveTill;
      console.log(formattedDate);
      const [day, month, year] = formattedDate.split("/");

      const dateObject = new Date(`${month}/${day}/${year}`);
      dateObject.setMonth(dateObject.getMonth() + 1);

      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const increasedDateFormatted = dateObject.toLocaleDateString(
        "en-GB",
        options
      );

      console.log(increasedDateFormatted);
      dispatch(
        updateMembershipAction({
          membershipActiveTill: increasedDateFormatted,
          localId: userData.localId,
          key: subscriptionDetail[0].key,
        })
      );
    } else {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 1);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const formattedDate2 = currentDate.toLocaleDateString("en-GB", options);
      console.log("yes");
      const monthObject = {
        email: userData.email,
        membershipPeriod: "One-Month",
        membershipStartDate: formatDate1,
        membershipActiveTill: formattedDate2,
        memberShipActive: true,
        price: 1500,
      };
      dispatch(
        postAction({ localId: userData.localId, monthObject: monthObject })
      );
    }
  };
  const threeMonthHandle = () => {
    if (subscriptionDetail[0] !== undefined) {
      const formattedDate = subscriptionDetail[0].membershipActiveTill;
      console.log(formattedDate);
      const [day, month, year] = formattedDate.split("/");

      const dateObject = new Date(`${month}/${day}/${year}`);
      dateObject.setMonth(dateObject.getMonth() + 3);

      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const increasedDateFormatted = dateObject.toLocaleDateString(
        "en-GB",
        options
      );

      console.log(increasedDateFormatted);
      dispatch(
        updateMembershipAction({
          membershipActiveTill: increasedDateFormatted,
          localId: userData.localId,
          key: subscriptionDetail[0].key,
        })
      );
    } else {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 3);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const formattedDate2 = currentDate.toLocaleDateString("en-GB", options);
      console.log("yes");
      const monthObject = {
        email: userData.email,
        membershipPeriod: "One-Month",
        membershipStartDate: formatDate1,
        membershipActiveTill: formattedDate2,
        memberShipActive: true,
        price: 1500,
      };
      dispatch(
        postAction({ localId: userData.localId, monthObject: monthObject })
      );
    }
  };
  const sixMonthHandle = () => {
    if (subscriptionDetail[0] !== undefined) {
      const formattedDate = subscriptionDetail[0].membershipActiveTill;
      console.log(formattedDate);
      const [day, month, year] = formattedDate.split("/");

      const dateObject = new Date(`${month}/${day}/${year}`);
      dateObject.setMonth(dateObject.getMonth() + 6);

      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const increasedDateFormatted = dateObject.toLocaleDateString(
        "en-GB",
        options
      );

      console.log(increasedDateFormatted);
      dispatch(
        updateMembershipAction({
          membershipActiveTill: increasedDateFormatted,
          localId: userData.localId,
          key: subscriptionDetail[0].key,
        })
      );
    } else {
      const currentDate = new Date();
      currentDate.setMonth(currentDate.getMonth() + 6);
      const options = { day: "2-digit", month: "2-digit", year: "numeric" };
      const formattedDate2 = currentDate.toLocaleDateString("en-GB", options);
      console.log("yes");
      const monthObject = {
        email: userData.email,
        membershipPeriod: "One-Month",
        membershipStartDate: formatDate1,
        membershipActiveTill: formattedDate2,
        memberShipActive: true,
        price: 1500,
      };
      dispatch(
        postAction({ localId: userData.localId, monthObject: monthObject })
      );
    }
  };
  return (
    <div style={{ marginTop: "4.5rem" }}>
      <Stack spacing={2}>
        <Item>
         MemberShip Active Till: {subscriptionDetail[0] && subscriptionDetail[0].membershipActiveTill}
        </Item>
      </Stack>

      <Accordion
        sx={{
          background: "linear-gradient(45deg, darkGrey 90%, #707070 90%)",
          mt: "0.5rem",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>One Month MemberShip</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>Total Price: ₹ 1500 </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography onClick={OneMonthHandle} sx={{ cursor: "pointer" }}>
            Activate
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion
        sx={{
          background: "linear-gradient(45deg, darkGrey 90%, #707070 90%)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Three Months MemberShip</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>Total Price: ₹ 3000 </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography onClick={threeMonthHandle} sx={{ cursor: "pointer" }}>
            Activate
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion
        sx={{
          background: "linear-gradient(45deg, darkGrey 90%, #707070 90%)",
        }}
      >
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Six Months MemberShip</Typography>
        </AccordionSummary>

        <AccordionDetails>
          <Typography>Total Price: ₹ 5000 </Typography>
        </AccordionDetails>
        <AccordionDetails>
          <Typography onClick={sixMonthHandle} sx={{ cursor: "pointer" }}>
            Activate
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
};

export default MemberShip;
