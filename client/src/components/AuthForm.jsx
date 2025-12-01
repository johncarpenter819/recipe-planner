import React, { useState } from "react";
import "../styles/AuthForm.css";

const AuthForm = () => {
  const [isSignUpActive, setIsSignUpActive] = useState(false);

  const switchToSignUp = () => setIsSignUpActive(true);
  const switchToLogin = () => setIsSignUpActive(false);

  return (
    <div className="body-bg">
      <div
        className={`container ${isSignUpActive ? "right-panel-active" : ""}`}
        id="container"
      >
        <div className="form-container sign-up-container">
          <form action="#">
            <h1>Create Account</h1>
            <span>or use your email to register</span>
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button>Register</button>
          </form>
        </div>

        <div className="form-container log-in-container">
          <form action="#">
            <h1>Log In</h1>
            <span>Use your account</span>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <a href="#">Forgot your password?</a>
            <button>Log In</button>
          </form>
        </div>

        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>To keep connected with us please login!</p>
              <button className="ghost" onClick={switchToLogin}>
                Log In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello, Friend!</h1>
              <p>
                Enter your information to register, and start your journey with
                us!
              </p>
              <button className="ghost" onClick={switchToSignUp}>
                Register
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthForm;
