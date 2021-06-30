import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

function HomePage(props) {

    return (
        <div className="home">
            <span>
                <Link to="/signup">
                    <button type="button" class="btn btn-primary">SignUp</button>
                </Link>
                <Link to="/login">
                    <button type="button" class="btn btn-primary">Login</button>
                </Link>
            </span>
            
            <br/>
            <br/> 
            <br/> 
            <br/>   
            <div class="input-group">
                <div class="form-outline">
                    <input type="search" id="form1" class="form-control" />
                    <label class="form-label" for="form1">Search Restaurants</label>
                </div>
                <button type="button" class="btn btn-primary">
                    <i class="fas fa-search">Search</i>
                </button>
            </div>
        </div>
    );
}

export default withRouter(HomePage);