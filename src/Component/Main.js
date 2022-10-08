import React from "react";

function Main() {
  return (
    <div className="main">
      <div className="LeftSide">
        <img src="https://i0.wp.com/journo.com.tr/wp-content/uploads/2021/07/ay-fotografi-nasil-cekilir.jpg?fit=927%2C960&ssl=1" />
      </div>
      <div className="RightSide">
        <span className="uk">English (UK)</span>
        <h1 className="h1">Create Account</h1>
        <div className="signup">
          <div className="signup-google">
            <div className="signimg">
              <img src="https://freesvg.org/img/1534129544.png" />
            </div>
            <div className="signdiv">Sign up with Google</div>
          </div>
          <div className="signup-facebook">
            <div className="fbimg">
              <img src="https://upload.wikimedia.org/wikipedia/commons/4/44/Facebook_Logo.png" />
            </div>
            <div className="fbdiv">Sign up with Facebook</div>
          </div>
          <div className="or">- OR -</div>
          <div className="fullname">Full Name</div>
          <div className="email">Email Address</div>
          <div className="password">Password</div>
          <div className="create-account">
            <div>Create Account</div>
          </div>
          <div className="already">
            <div className="alrhv">Already have a account?</div>
            <div className="login">Log in</div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
