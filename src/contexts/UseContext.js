import React, { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({children}) =>{
    const [user, setUser] =useState({name: 'RAJU'})
    
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
        return signInWithEmailAndPassword(auth, email, password);
    }


    const authInfo = { user, createUser, signInEmailPassword};

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


}

export default UseContext;