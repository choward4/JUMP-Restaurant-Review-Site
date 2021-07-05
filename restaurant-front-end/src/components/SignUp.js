import React, { Component } from 'react';

function SignUpPage(props) {

    return (
        <div className="signup">
            <h1> Signup Page </h1>
            <form>
                <label>Email : </label>   
                <input type="text" placeholder="Enter Email" name="email"/>  
                <br/>
                <br/>

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
            <a href="/">
                    <button class="btn btn-primary">Cancel</button>
            </a>
        </div>
    );
}

export default SignUpPage;