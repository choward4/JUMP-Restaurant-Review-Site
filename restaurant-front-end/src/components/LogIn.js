import React, { Component } from 'react';
import './LoginSignUp.css'

function LoginPage(props) {

    return (
        <div className="login">
            <h1> Login Page </h1>
            <br/>
            <br/>
            <form>
                <label>Username : </label>   
                <input type="text" placeholder="Enter Username" name="username"/>  
                <br/>
                <br/>

                <label>Password : </label>   
                <input type="password" placeholder="Enter Password" name="password"/>  
                <br/><br/>
                
                <button class="btn btn-primary" type="submit">Login</button>   
            </form>

            <br/>
            <a href="/signup">
                    <button class="btn btn-primary">Sign Up</button>
            </a>

            
            
            
            
        </div>
    );
}

export default LoginPage;