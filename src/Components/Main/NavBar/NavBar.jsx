import React from "react";
import "./NavBar.css";
import house from "../../../assets/house.png";
import bell from "../../../assets/bell.png";
import compass from "../../../assets/compass.png";
import settings from "../../../assets/settings.png";

export const NavBar = () => {
    return (
        <div className="navBar">
            <nav>
                <div className="link">
                    <img src={house} alt="" />
                    <p>Home</p>
                </div>
                <div className="link">
                    <img src={compass} alt="" />
                    <p>Explore</p>
                </div>
                <div className="link">
                    <img src={bell} alt="" />
                    <p>Notifications</p>
                </div>
                <div className="link">
                    <img src={settings} alt="" />
                    <p>Settings</p>
                </div>
            </nav>
        </div>
    )
}