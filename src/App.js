import {Switch, Route} from "react-router-dom";
import "./app.scss";
import Home from "./components/Home";
import Login from "./components/Login";
import Register from "./components/Register";
import Blog from "./components/Blog";
import {useEffect, useState} from "react";
import Firebase from "./Firebase";

function App() {
  const [user, setUser] = useState("");
  const [name, setName] = useState("");
  const [bioLine, setBioLine] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [hasAccount, setHasAccount] = useState(false);

  const clearInputs = () => {
    setEmail("");
    setPassword("");
  };
  const clearErrors = () => {
    setEmailError("");
    setPasswordError("");
  };
  const handleLogin = () => {
    clearErrors();
    Firebase.auth()
      .signInWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-notfound":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };
  const handleRegister = () => {
    clearErrors();
    Firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .catch((err) => {
        switch (err.code) {
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
          default:
            break;
        }
      });
  };

  const handleLogout = () => {
    Firebase.auth().signOut();
  };

  const authListener = () => {
    Firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        clearInputs();
        setUser(user);
      } else {
        setUser("");
      }
    });
  };

  useEffect(() => {
    authListener();
  }, []);

  const publicRouter = () => (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
      <Route path="/blog" component={Blog} />
    </Switch>
  );
  return (
    <div className="App">
      {/* {publicRouter()} */}
      {user ? (
        <Blog handleLogout={handleLogout} />
      ) : (
        <div className="loginPage">
          <Login
            name={name}
            setName={setName}
            bioLine={bioLine}
            setBioLine={setBioLine}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            handleLogin={handleLogin}
            handleRegister={handleRegister}
            hasAccount={hasAccount}
            setHasAccount={setHasAccount}
            emailError={emailError}
            passwordError={passwordError}
          />
        </div>
      )}
    </div>
  );
}

export default App;
