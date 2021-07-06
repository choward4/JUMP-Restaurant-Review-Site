import React, {useState} from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import SiteNav from "./components/SiteNav";
import Home from "./components/Home";
import Login from "./components/LogIn";
import SignUp from "./components/SignUp";
import Footer from "./components/Footer";
import Results from "./components/Results";
import RestaurantPage from "./components/RestaurantPage";

function App() {

    const [search, setSearch] = useState('');
    const [searching, setSearching] = useState(false);

    const searchFor = (searchValue, searchState) => {
      setSearch(searchValue);
      setSearching(searchState);
    }


  return (
      <Router>
        <SiteNav search={searchFor}/>
        
        <Switch>
          <Route path="/" exact component={() => <><Home /> </>} />
          <Route path="/results" exact component={() => <><Results /> </>} />
          {/* <Route psth="results">
            {!searching && <Results/>}
            {searching && <Results searh={search} searchFor={searchFor}/>}
          </Route> */}
          <Route path="/restaurant-page" exact component={() => <><RestaurantPage /> </>} />
          <Route path="/login" exact component={() => <Login />} />
          <Route path="/signup" exact component={() => <SignUp />} />
        </Switch>
        {/* {!searching && <Results/>}
        {searching && <Results searh={search} searchFor={searchFor}/>} */}
        <Footer />
      </Router>
  );
}

export default App;