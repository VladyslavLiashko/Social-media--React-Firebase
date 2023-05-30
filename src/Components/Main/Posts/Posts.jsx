import React, { useState } from "react";
import "./Posts.css";
import { Post } from "../Post/Post";

export const Posts = (props) => {

    //adding new posts
    const post = []
    const [NewPost, setNewPost] = useState(post)

    const [currentTitle, setCurrentTitle] = useState('')
    const [currentText, setCurrentText] = useState('')

    const Handler = (e) => {
        let newValue = e.currentTarget.value
        setCurrentTitle(newValue)

    }
    const SecondHandler = (e) => {
        let newValue = e.currentTarget.value
        setCurrentText(newValue)
    }
    function addPostFunc() {
        const newComment = {
            // id:7,
            name: props.data.displayName,
            title: currentTitle,
            text: currentText,
            img: props.data.photoURL
        }
        setNewPost([newComment, ...post])
        setCurrentTitle(' ');
        setCurrentText(' ');
    }
    console.log(NewPost)

    let allPosts = NewPost.map(p => <Post data={p} />)
    //

    const [menuActive, setMenuActive] = useState(false)
    return (
        <div className="Posts">
            <div className="headerPosts">
                <h1>Posts</h1>
                <button onClick={() => setMenuActive(!menuActive)}>Make Post</button>
            </div>
            {allPosts}

            <div className={menuActive ? 'menu active' : 'menu'} onClick={() => setMenuActive(false)}>
                <div className="menu-wrapper" onClick={e => e.stopPropagation()}>
                    <h1>New Post</h1>
                    <form action="#" >
                        <label htmlFor="title">Title</label>
                        <input type="text" name="title" id="titleInput" placeholder="Enter title..." onChange={Handler} />

                        <label htmlFor="mainInfo">Text</label>
                        <input type="text" name="mainInfo" id="textInput" placeholder="Enter your text..." onChange={SecondHandler} />
                    </form>
                </div>
                <div className="menuBtn">
                    <button onClick={addPostFunc}>Submit</button>
                </div>
            </div>

        </div>
    )
}