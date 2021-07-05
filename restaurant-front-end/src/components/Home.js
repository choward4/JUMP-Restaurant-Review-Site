import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";

function HomePage(props) {

    return (
        <div className="home">
            <h1>Welcome!</h1>
            <br/>
            
            <p1>This is the homepage</p1>
        </div>
    );
}

export default withRouter(HomePage);