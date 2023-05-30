import React from "react";
import { NavBar } from "./NavBar/NavBar";
import { ProfileBar } from "./ProfileBar/ProfileBar";
import { Route, Routes } from "react-router-dom";
import { Posts } from "./Posts/Posts";
import "./Main.css"



export const Main = (props) => {
    console.log(props.data)
    return (
        <div className="main" style={{ display: "flex" }}>
            <NavBar />
            {/* <div className="mainBlock"> */}
                <ProfileBar info={props.data} />
                <Routes>
                    <Route path="/" element={<Posts data={props.data} />} />
                </Routes>
            {/* </div> */}

            {/* {props.data.displayName} */}
        </div>
    )
}