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
    <div className="container-fluid">
      <Router>
        <Switch>
          
          <Route path="/" exact component={() => <><SiteNav/><Home /> </>} />
          <Route path="/results" exact component={() => <><SiteNav/><Results /> </>} />
          <Route path="/restaurant-page" exact component={() => <><SiteNav/><RestaurantPage /> </>} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <SignUp />} />
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;