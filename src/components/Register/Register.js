import React, { useContext, useState } from "react";
import './Register.css'
import { Link } from "react-router-dom";
import { AuthContext } from "../../contexts/UseContext";

const Register = () =>{
    const [error, setError] = useState(null)

    const { user, createUser } = useContext(AuthContext);
    // console.log(createUser)

    const handleSubmit = (event) =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        if(password.length <6){
            setError('Password should must be 6 character. Please try again')
        }


        createUser(email, password)
            .then((userCredential) => {
                // Signed in 
                const user = userCredential.user;
                form.reset()
                setError('')
                console.log(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode);
                console.log(errorMessage)
                setError(errorMessage)
            });
        
    }



    return(
        <form onSubmit={handleSubmit} className="form-container">
            <h3>Register</h3>
            <div className="form-control">
                <label htmlFor="email">Name</label><br></br>
                <input type="text" name="name" placeholder="name" required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Email</label><br></br>
                <input type="email" name="email" placeholder="email" required />
            </div>
            <div className="form-control">
                <label htmlFor="email">Password</label><br></br>
                <input type="password" name="password" placeholder="password" required />
            </div>
            <div className="form-control">
                <input type="submit" value='Register' />
                <p className="error">{error}</p>
                <p>Already Register! <Link to='/login'>Please Sign In</Link></p>
            </div>

        </form>
    )
}


export default Register;