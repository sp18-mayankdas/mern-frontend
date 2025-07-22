import React, { useState } from 'react'
import { Link, useNavigate } from "react-router-dom"
import { useAuth } from '../context/AuthContext';

function Login() {

    const navigate = useNavigate();

    const { isLoggedIn, setIsLoggedIn, login, logout } = useAuth();

    function submitHandler(e) {
        e.preventDefault()

        if (!isLoggedIn) {
            login();
            navigate("/home");
        }
        else {
            logout();
            navigate("/")
        }
    }
    return (
        <div>
            <form onSubmit={submitHandler}>
                <label htmlFor="Email">
                    Enter your Email:
                    <input
                        type="email"
                        name="Email"
                        id="Email"
                    />
                </label>

                <label htmlFor="Email">
                    Enter your Password:
                    <input type="password" name="password" id="password" />
                </label>

                <button>Login</button>
            </form>
        </div>
    )
}

export default Login