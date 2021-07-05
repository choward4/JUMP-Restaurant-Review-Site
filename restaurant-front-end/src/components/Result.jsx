import React, { Component } from 'react';
import './Result.css'
function Result(props) {

    return (
        <div id="list" clas="row">
            <div col-md-6>
                <p1>{props.name}</p1>
            </div>
            <div class="col-md-12 text-right">
                <a href="/restaurant-page">
                    <button type="button" class="btn btn-light">Go To Page</button>
                </a>
            </div>
        </div>
    );
}

export default Result;