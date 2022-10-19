import React, { createContext, useEffect, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({children}) =>{
    const [user, setUser] = useState(null)
    const [loading, SetLoading] = useState(true)
    
     // --------------------------------
    // createUserWithEmailAndPassword
     // --------------------------------
    const createUser = (email, password) =>{
     return   createUserWithEmailAndPassword(auth, email, password)
    }

    // --------------------------------
    // signInWithEmailAndPassword
     // --------------------------------
    const signInEmailPassword = (email, password) => {
        SetLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }


    // -----------------------------------
    // onAuthStateChanged
    // ----------------------------------
    useEffect(() => {
        onAuthStateChanged(auth, currentUser => {
            // console.log('onAuthStateChanged firebase', currentUser);
            setUser(currentUser);
            SetLoading(false)
        })
    },[])





     // --------------------------------
    // signOut
     // --------------------------------
    const logOut = () => {
        return signOut(auth)
    }

    const authInfo = { user, createUser, signInEmailPassword, logOut, loading};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


}

export default UseContext;