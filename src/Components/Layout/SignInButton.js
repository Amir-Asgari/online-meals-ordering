import React from "react";

const SignInButton = ({onShownSignIn}) => {


  return (
    <div>
      <button
        style={{
          color: "white",
          backgroundColor: "#4d1601",
          borderRadius: 30,
          padding: 15,
        }}
        onClick={onShownSignIn}
      >
        Sign in / Sign up
      </button>
    </div>
  );
};

export default SignInButton;
