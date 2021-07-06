import React, { Component } from 'react';
import './Result.css'

class Result extends Component {
    render() {
        return (
            <div id="list" className="container row">
                <Name name={this.props.info.name} />
                <GoButton/>
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

function GoButton() {
    return(
        <div className="col-md-12 text-right col-centered">
            <a href="/restaurant-page" className="col-centered">
                <button type="button" className="btn btn-light">Go To Page</button>
            </a>
        </div>

    )
    
}

export default Result;