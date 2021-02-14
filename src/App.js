import React, { useState } from 'react';
import './App.css';
import { useSpring, animated } from 'react-spring';

function App() {

  const [registrationFormStatus, setRegestrationFormStatus] = useState(false);

  const loginProps = useSpring({
    left: registrationFormStatus ? -500 : 0, // Login form sliding positions
  });

  const registerProps = useSpring({
    left: registrationFormStatus ? 0 : 500, // Register form sliding positions
  });

  const loginBtnProps = useSpring({
    borderBottom: registrationFormStatus
    ? "solid 0px transparent"
    : "solid 2px #1059FF", // Animate botton border of login button
  });

  const registerBtnProps = useSpring({
    borderBottom: registrationFormStatus
    ? "solid 2px #1059FF"
    : "solid 0px transparent", // Animate bottom border of register button
  });

  function registerClicked() {
    setRegestrationFormStatus(true);
  }

  function loginClicked() {
    setRegestrationFormStatus(false);
  }

  return (
    <div className="login-register-wrapper">
      <div className="nav-buttons">
        <animated.button
          onClick={loginClicked}
          id="loginBtn"
          style={loginBtnProps}
        >
          Login
        </animated.button>
        <animated.button
          onClick={registerClicked}
          id="registerBtn"
          style={registerBtnProps}
        >
          Register
        </animated.button>
      </div>
      <div className="form-group">
        <animated.form action="" id="loginform" style={loginProps}>
          <LoginForm />
        </animated.form>
        <animated.form action="" id="registerform" style={registerProps}>
          <RegisterForm />
        </animated.form>
      </div>
      <animated.div className="forgot-panel" style={loginProps}>
        <a href="#">Forgot your password</a>
      </animated.div>
    </div>
  );
}

function LoginForm() {
  return (
    <React.Fragment>
      <label>
        USERNAME:
        <input type="text" id="username" />
      </label>
      <label>
        PASSWORD:
        <input type="password" id="password" />
      </label>
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  );
}

function RegisterForm() {
  return (
    <React.Fragment>
      <label>
        full name:
        <input type="text" id="fullname" />
      </label>
      <label>
        email:
        <input type="text" id="email" />
      </label>
      <label>
        password:
        <input type="password" id="password" />
      </label>
      <label>
        confirm password:
        <input type="password" id="confirmpassword" />
      </label>
      <input type="submit" value="submit" className="submit" />
    </React.Fragment>
  )
}

export default App;
