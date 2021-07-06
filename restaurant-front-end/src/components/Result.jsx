import React, { Component } from 'react';


import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";


import './Result.css'

class Result extends Component {

    state = {
        redirect: false
    };


    handleClick = () =>{
        this.setState({
            redirect: true
        })
    };

    render() {
        
        // console.log(this.props.info);
        return (
            <div className="container row list" id={`restaurant` + this.props.info.restaruant_id}>
                <Name name={this.props.info.name} />
                <GoButton id={this.props.info.restaruant_id} />
            </div>
        );

        
    }
}

function Name(props) {

    return (
        <div className="col-md-6">
            <p1>{props.name}</p1>
        </div>
    );
}

function GoButton(props) {
    return(
        <div className="col-md-12 text-right col-centered">
            <Link to={`/restaurant-page?id=${props.id}`} className="col-centered">
                <button type="button" className="btn btn-light">Go To Page</button>
            </Link>
        </div>

    )
    
}


    
    


export default Result;