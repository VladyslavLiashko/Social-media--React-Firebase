import React from "react";
import { Auth } from "../Auth/Auth";
import "./Login.css"
import google from "../../assets/Google.png"
export const Login = (props) => {
    return (
        <div className="login">
            <div className="wrapper">
                <h1>Login</h1>
                <p>login with google account</p>
                <div className="login-btn">
                    <button onClick={props.func}> <img src={google} /> <p>Login</p> <p></p> </button>
                </div>
            </div>
        </div>
    )
}