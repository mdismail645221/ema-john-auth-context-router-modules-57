import React, { createContext, useState } from "react";
import {createUserWithEmailAndPassword, getAuth} from 'firebase/auth'
import app from "../firebase/firebase.config";

export const AuthContext = createContext();

const auth = getAuth(app);

const UseContext = ({children}) =>{
    const [user, setUser] =useState({name: 'RAJU'})
    

    // createUserWithEmailAndPassword
    const createUser = (email, password) =>{
        createUserWithEmailAndPassword(auth, email, password)
    }


    const authInfo = { user, createUser };

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )


}

export default UseContext;