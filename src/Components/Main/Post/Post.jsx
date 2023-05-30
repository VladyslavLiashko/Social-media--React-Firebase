import React, { useState } from "react";
import "./Post.css";
import { useActionData } from "react-router-dom";

export const Post = (props) => {
    const date = new Date();
    const fullDate = `${date.getDate()}.0${date.getMonth()}.${date.getFullYear()}`;

    return (
        <div className="Post">
            <div className="postInfo">
                <img src={props.data.img} alt="" />
                <p>{props.data.name}</p>
                <h3>{fullDate}</h3>
            </div>
            <div className="postMain">
                <h1>{props.data.title}</h1>
                <h2>{props.data.text}</h2>
            </div>
        </div>
    )
}