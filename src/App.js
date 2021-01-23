import "./App.css";
import {Switch, Route, Redirect} from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import Blog from "./components/Blog";
function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route path="/blog" component={Blog} />
      </Switch>
    </div>
  );
}

export default App;
