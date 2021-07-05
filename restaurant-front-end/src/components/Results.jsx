import React, { Component } from 'react';
import Result from "./Result"

function Results(props) {

    return (
        <div className="results">
            <h3>Results</h3>
            <br/>

            <Result name={"Demo Name"}/>
            <Result name={"Demo Name 2"}/>
        </div>
    );
    

}

export default Results;