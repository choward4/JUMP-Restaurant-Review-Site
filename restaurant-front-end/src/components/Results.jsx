import React, { Component } from 'react';
import ResultLayout from "./ResultLayout"

function Results(props) {

    return (
        <div className="container-fluid">
            <h3>Results</h3>
            <br/>
            {!props.search && <ResultLayout search={false}/>}

        </div>
    );
    

}

export default Results;