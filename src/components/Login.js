import React from "react";

const Login = (props) => {
  const {
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
    <div>
      <div>
        <label>Email</label>
        <input
          type="text"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <p>{emailError}</p>

        <label>Password</label>
        <input
          type="password"
          required
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <p>{passwordError}</p>
        <div>
          {hasAccount ? (
            <>
              <button onClick={handleLogin}>Login</button>
              <p>
                or{" "}
                <span onClick={() => setHasAccount(!hasAccount)}>Register</span>
              </p>
            </>
          ) : (
            <>
              <button onClick={handleRegister}>Register</button>
              <p>
                or <span onClick={() => setHasAccount(!hasAccount)}>Login</span>
              </p>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Login;
