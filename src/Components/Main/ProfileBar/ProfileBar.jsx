import React from "react";
import "./ProfileBar.css";
import user from "../../../assets/user.png";
import heart from "../../../assets/heart.png";
import video from "../../../assets/video.png";
import microchip from "../../../assets/microchip.png";

export const ProfileBar = (props) => {
    return (
        <div className="profileBar">
            <div className="profileBar-wrapper">
                <div className="profileBar-info">
                    <div className="profileBar-img">
                        <img src={props.info.photoURL} alt="ph" />
                    </div>
                    <p id="user-name">{props.info.displayName}</p>
                    <p id="user-mail">{props.info.email}</p>
                </div>
                <div className="profileBar-action">
                    <div className="profile-action">
                        <img src={user} alt="" />
                        <div className="action-info">
                            <h1>Followers</h1>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="profile-action">
                        <img src={heart} alt="" />
                        <div className="action-info">
                            <h1>Likes</h1>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="profile-action">
                        <img src={video} alt="" />
                        <div className="action-info">
                            <h1>Posts</h1>
                            <p>0</p>
                        </div>
                    </div>
                    <div className="profile-action">
                        <img src={microchip} alt="" />
                        <div className="action-info">
                            <h1>Category</h1>
                            <p>life-blog</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}