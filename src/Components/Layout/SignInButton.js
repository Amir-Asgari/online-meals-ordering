import React from "react";

const SignInButton = (props) => {
  return (
    <div>
      <button
        style={{
          color: "white",
          backgroundColor: "#4d1601",
          borderRadius: 30,
          padding: 15,
        }}
        onClick={props.onShownCart}
      >
        Sign in / Sign up
      </button>
    </div>
  );
};

export default SignInButton;
