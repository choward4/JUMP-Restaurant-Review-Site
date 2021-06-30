import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" exact component={() => <Home />} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <SignUp />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;