import React, { useEffect, useState } from "react";
import { getAuth, signInWithPopup, signOut } from "firebase/auth"
import { app, googleAuthProvider } from "../../firebase";
import { Login } from "../Login/Login";
import { Main } from "../Main/Main";

export const Auth = () => {
    const auth = getAuth(app)
    const [user, setUser] = useState(auth.currentUser)
    let loginBtn = false
    const loginFunc = () => {
        // useEffect(() => {
        //     const unsub = auth.onAuthStateChanged((possibleUser) => {
        //         if (possibleUser != null) {
        //             return setUser(possibleUser)
        //         }
        //         else {
        //             signInWithPopup(auth, googleAuthProvider)
        //                 .then((credentials) => setUser(credentials.user))
        //                 .cath((err) => console.log(err))
        //         } 
        //     })

        //     return unsub;
        // }, [auth]);

            const unsub = auth.onAuthStateChanged((possibleUser) => {
                if (possibleUser != null) {
                    return setUser(possibleUser)
                }
                else {
                    signInWithPopup(auth, googleAuthProvider)
                        .then((credentials) => setUser(credentials.user))
                        .cath((err) => console.log(err))
                }
            })

            return unsub;
    }
    // const signOutFunc = () =>{
    //     signOut(auth).then(() => {
    //         // Sign-out successful.
    //       }).catch((error) => {
    //         // An error happened.
    //       });
    // }
    console.log(user)
    return user != null ? <Main data={user}/>: <Login func={loginFunc}/>
}

{/* <div><div>{user.displayName}</div> <button onClick={signOutFunc}>Sign Out</button></div>  */}