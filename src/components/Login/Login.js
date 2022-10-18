import React, { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'

const Login = () =>{

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