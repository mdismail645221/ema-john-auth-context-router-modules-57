import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";
import './Login.css'

const Login = () => {
    
    const {signInEmailPassword} = useContext(AuthContext)

    const [error, setError] = useState('');
    const [success, setSuccess] = useState('')

    const handleSubmit = (event) =>{
        event.preventDefault()
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        const confirm = form.confirm.value;
        console.log(email, password, confirm)

        // console.log(error)
        if(password !== confirm){
            setError(`Don't Matched password & confirm number.  Please Matched the password and confirm number.`);
            // return;
        }else{
            setSuccess('Successfully matched the number.')
        }

        // --------------------------------------
        // Sign In with Firebase authentication methods
        // -------------------------------------
        signInEmailPassword(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => {
                const Usererror = error;
                const errorMsg = error.message;
                console.log(Usererror, errorMsg)
        })


    }





    return(
        <form  onSubmit={handleSubmit} className="form-container">
            <h3>Log In</h3>
            <div className="form-control">
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" placeholder="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Password</label><br></br>
                <input type="password" name="password" placeholder="password" required />
            </div>
            <div className="form-control">
                <label htmlFor="confirm">Confirm</label><br></br>
                <input type="password" name="confirm" placeholder="confirm" required />
                <input type="submit" value='Login' />
                {error? error : success}
                <p>New to ema-john <Link to='/register'>Create a New Account</Link></p>
            </div>

        </form>
    )
}

export default Login;