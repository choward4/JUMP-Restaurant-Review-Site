import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Results from "./components/Results";
import RestaurantPage from "./components/RestaurantPage";

function App() {
  return (
      <Router>
        <SiteNav/>
        <Switch>
          <Route path="/" exact component={() => <><Home /> </>} />
          <Route path="/results" exact component={() => <><Results /> </>} />
          <Route path="/restaurant-page" exact component={() => <><RestaurantPage /> </>} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <SignUp />} />
        </Switch>
        <Footer />
      </Router>
  );
}

export default App;