import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from "../images/amazon-logo-black.png"
import "./Login.css"
import { auth } from '../firebase'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from "firebase/auth"

function Login() {
    const navigate = useNavigate();

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const signIn = e => {
        e.preventDefault();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log(userCredential)
                if (auth) {
                    navigate("/", { replace: true })
                }
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        console.log(email, password)
        createUserWithEmailAndPassword(auth, email, password)
            .then((auth) => {
                console.log(auth)
                if (auth) {
                    navigate("/", { replace: true })
                }
            })
            .catch(error => alert(error.message))

    }


    return (
        <div className='login'>
            <Link to="/">
                <img src={logo} alt="" className="login__logo" />
            </Link>
            <div className='login__container'>
                <h1>Sign-In</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type="text" name='email' value={email} onChange={e => setEmail(e.target.value)} />
                    <h5>Password</h5>
                    <input type="password" name='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button className='login_signInButton' onClick={signIn} type="submit">Sign In</button>

                    <p>By creating an account, you agree to The Fake Amazon Clones Conditions of Use and Privacy Notice.</p>
                    <button className='login_registerButton' onClick={register}>Create your Amazon Account</button>
                </form>
            </div>

        </div>
    )
}

export default Login
