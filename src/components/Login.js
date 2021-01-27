import React from "react";
import Button from "@material-ui/core/Button";
import styled from "styled-components";

const P = styled.p`
  color: #f00;
`;
const LoginTitle = styled.h1`
  align-items: center;
  font-size: 2em;
  padding-top: 40px;
`;
const LoginSubTitle = styled.h1`
  align-items: center;
  font-size: 0.8em;
  padding-bottom: 10px;
`;

const LoginForm1 = styled.div`
  margin: 100px auto;
  padding: 20px;
  width: 20vw;
  height: 43vh;
  //   border: 1px black solid;
  border-radius: 12%;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
  background-color: #ececec;
  transition: ease all 0.2s;

  @media only screen and (max-width: 1300px) {
    width: 30vw;
  }
  @media only screen and (max-width: 900px) {
    width: 40vw;
  }
  @media only screen and (max-width: 700px) {
    width: 55vw;
  }
  @media only screen and (max-width: 500px) {
    width: 65vw;
  }
  @media only screen and (max-width: 415px) {
    width: 75vw;
  }
`;

const LoginForm2 = styled.div`
  margin: 100px auto;
  padding: 20px;
  width: 25vw;
  height: 50vh;
  //   border: 1px black solid;
  border-radius: 12%;
  box-shadow: 13px 13px 20px #cbced1, -13px -13px 20px #fff;
  background-color: #ececec;
  transition: ease all 0.2s;

  @media only screen and (max-width: 1300px) {
    width: 30vw;
  }
  @media only screen and (max-width: 900px) {
    width: 40vw;
  }
  @media only screen and (max-width: 700px) {
    width: 55vw;
  }
  @media only screen and (max-width: 500px) {
    width: 65vw;
  }
  @media only screen and (max-width: 415px) {
    width: 75vw;
  }
`;
const Box = styled.div`
  width: 100%;
  padding: 5px;
`;
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
    <>
      {hasAccount ? (
        <LoginForm1 className="loginForm">
          <LoginTitle className="loginTitle googleFont">Welcome</LoginTitle>
          {/* <h1 className="loginSubTitle googleFont">Login</h1> */}
          <LoginSubTitle className="loginSubTitle googleFont">
            Login, Continue to blog
          </LoginSubTitle>
          <Box className="loginBox">
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <P>{emailError}</P>

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <P>{passwordError}</P>
            <Button
              className="mg-b-10"
              variant="contained"
              color="primary"
              onClick={handleLogin}
            >
              Login
            </Button>
            <P style={{color: "#000"}}>
              or{" "}
              <Button onClick={() => setHasAccount(!hasAccount)}>
                Register
              </Button>
            </P>
          </Box>
        </LoginForm1>
      ) : (
        <LoginForm2 className="loginForm">
          <LoginTitle className="loginTitle googleFont">Welcome</LoginTitle>
          {/* <h1 className="loginSubTitle googleFont">Login</h1> */}
          <LoginSubTitle className="loginSubTitle googleFont">
            Register Your Account
          </LoginSubTitle>
          <Box className="registerBox">
            <input
              type="text"
              required
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />

            <P />
            <input
              type="text"
              required
              placeholder="Bio Line"
              value={bioLine}
              onChange={(e) => setBioLine(e.target.value)}
            />

            <P />
            <input
              type="text"
              required
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <P>{emailError}</P>

            <input
              type="password"
              required
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <P>{passwordError}</P>
            <Button
              className="mg-b-10"
              variant="contained"
              color="primary"
              onClick={handleRegister}
            >
              Register
            </Button>
            <P style={{color: "#000"}}>
              or{" "}
              <Button onClick={() => setHasAccount(!hasAccount)}>Login</Button>
            </P>
          </Box>
        </LoginForm2>
      )}
    </>
  );
};

export default Login;
