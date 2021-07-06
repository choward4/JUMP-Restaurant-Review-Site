import React, { Component } from 'react';
import { Link, withRouter } from "react-router-dom";
import './Home.css';

function HomePage(props) {

    return (
        <div className="home">
            <h1>Welcome!</h1>
            <br/>
            <img src='https://memegenerator.net/img/instances/65052209.jpg'/>
        </div>
    );
}

export default withRouter(HomePage);