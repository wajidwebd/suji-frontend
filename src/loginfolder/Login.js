import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'

import { useNavigate, Link } from 'react-router-dom';
export const Login = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigation = useNavigate()
    const submitDataToFirebase = async (e) =>{
        e.preventDefault();
        try {
            const credential = await signInWithEmailAndPassword(auth,email,password);
            let userdetailid =  credential.user
            localStorage.setItem("id",userdetailid.accessToken)
            localStorage.setItem("user",JSON.stringify(userdetailid))
            navigation('/home')
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div className='login-container'>
    <h2>Login</h2>
        <form method='post'>
            <input type='text' placeholder='Enter your email' onChange={(event)=>setEmail(event.target.value)}></input>
            <input type='text' placeholder='Enter your password'  onChange={(event)=>setPassword(event.target.value)}></input>
            <input type='submit' onClick={submitDataToFirebase}></input>


        </form>
        <Link to="/">Signup</Link>
    </div>
  )
}
