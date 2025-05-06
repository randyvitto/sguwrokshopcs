"use client"

import { useState } from "react";
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation";
import React from "react";

const Login=() => {
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()
    const router = useRouter()
    
    const handleSubmit= async (e) =>{
        e.preventDefault();
        signIn("credentials", {
            email,
            password,
            redirect: false
        }).then((res) => {
            setEmail("")
            setPassword("")
            router.push('/')
        })
        }

    const handleEmailChange = (e) => {
        setEmail(e.target.value)
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    return(
        <form onSubmit={handleSubmit}>
            Login pages

            <input
                type = "text"
                value = {email}
                onChange={handleEmailChange}
            />
            
            <input 
                type = "password"
                value = {password}
                onChange={handlePasswordChange}
            />
            
            <button type ="submit">
                Login
            </button>
        </form>
    )       
    
}

export default Login;