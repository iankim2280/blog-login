import React from "react";
import Button from "@material-ui/core/Button";

const Login = (props) => {
  const {
    name,
    setName,
    bioLine,
    setBioLine,
    email,
    setEmail,
    password,
    setPassword,
    handleLogin,
    handleRegister,
    hasAccount,
    setHasAccount,
    emailError,
    passwordError,
  } = props;
  return (
    <div className="loginForm">
      <h1 className="loginTitle googleFont">Welcome</h1>
      {/* <h1 className="loginSubTitle googleFont">Login</h1> */}

      {hasAccount ? (
        <>
          <h1 className="loginSubTitle googleFont">Login, Continue to blog</h1>
          <div className="loginBox">
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <Button
              className="mg-b-10"
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <p>
              or{" "}
              <Button onClick={() => setHasAccount(!hasAccount)}>
                Register
              </Button>
            </p>
          </div>
        </>
      ) : (
        <>
          <h1 className="loginSubTitle googleFont">Register Your Account</h1>
          <div className="registerBox">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <p></p>
            <input
              type="text"
              required
              placeholder="Bio Line"
              value={bioLine}
              onChange={(e) => setBioLine(e.target.value)}
            />

            <p></p>
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <p>{emailError}</p>

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <p>{passwordError}</p>
            <Button
              className="mg-b-10"
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Register
            </Button>
            <p>
              or{" "}
              <Button onClick={() => setHasAccount(!hasAccount)}>Login</Button>
            </p>
          </div>
        </>
      )}
    </div>
  );
};

export default Login;
