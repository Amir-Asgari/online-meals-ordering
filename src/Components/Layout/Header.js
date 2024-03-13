import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import mealsPic from "./../../Assets/meals.jpg";
import classes from "./../Layout/Header.module.css";
import style from "../../Components/Layout/Header/HiddenHeader.module.css";
import CustomButton from "./CustomButton";
import SignUp from "./SignUp/SignUp";
import SignIn from "./SignIn/SignIn";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";

const Header = (props) => {
  const [showSignUp, setShowSignUp] = useState(false);
  const [ShowSignIn, setShowSignIn] = useState(false);

  const onShownSignUp = () => {
    setShowSignUp(!showSignUp);
  };
  const signUpShowHandler = () => {
    setShowSignUp(false);
  };
  const onShownSignIn = () => {
    setShowSignIn(!ShowSignIn);
  };
  const signInShowHandler = () => {
    setShowSignIn(false);
  };

  return (
    <Fragment>
      <div style={{ backgroundColor: "#FFF", padding: "0.5rem" }}>
        <header className={classes.header}>
          <Link style={{ textDecoration: "none", color: "white" }} to="/">
            <h1> سایت سفارش غذا</h1>
          </Link>
          <Stack spacing={2} direction="row">
            <Button
              className={classes.button}
              onClick={onShownSignIn}
              variant="contained"
              style={{ backgroundColor: "rgb(77, 22, 1)" }}
            >
              ورود
            </Button>
            <Button
              className={classes.button}
              onClick={onShownSignUp}
              variant="contained"
              style={{ backgroundColor: "rgb(77, 22, 1)" }}
            >
              ثبت نام
            </Button>
          </Stack>

          {showSignUp && <SignUp onCloseCart={signUpShowHandler} />}
          {ShowSignIn && <SignIn onCloseCart={signInShowHandler} />}
          <CustomButton onShownCart={props.onShownCart} />
        </header>
        <div className={classes.nav}>

          <Button
            style={{
              backgroundColor: "#4d1601",
              borderRadius: "10px",
              paddingTop: "10px",
              textDecoration: "none",
              marginRight: "10px",
            }}
            variant="secondary"
            component={Link}
            to="/aboutUs"
          >
            درباره ما
          </Button>
          <Button
            style={{
              backgroundColor: "#4d1601",
              borderRadius: "10px",
              paddingTop: "10px",
              textDecoration: "none",
              marginRight: "10px",
            }}
            variant="secondary"
            component={Link}
            to="/Branches"
          >
            شعبه ها
          </Button>
          <Button
            className={classes.routeButton}
            style={{
              backgroundColor: "#4d1601",
              borderRadius: "10px",
              paddingTop: "10px",
              textDecoration: "none",
              marginRight: "10px",
            }}
            variant="secondary"
            component={Link}
            to="/"
          >
            صفحه اصلی
          </Button>
        </div>
      </div>

      <div className={classes["main-image"]}>
        <img src={mealsPic} alt="A table full of delicious food!" />
      </div>
    </Fragment>
  );
};

export default Header;
