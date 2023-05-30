import React from "react";
import logo from "../../assets/logo.png"
import "./Header.css"

export const Header = () => {
    return (
        <div className="Header">
            <div className="header-logo">
                <img src={logo} alt="ConnectX" />
            </div>
            <p>Every Connection Maters</p>
        </div>
    )
}