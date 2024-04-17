import { createUserWithEmailAndPassword } from 'firebase/auth'
import React, { useState } from 'react'
import { auth } from '../firebase'

import { useNavigate, Link } from 'react-router-dom';
export const Signup = () => {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const navigation = useNavigate()
    const submitDataToFirebase = async (e) =>{
        e.preventDefault();
        try {
            const credential = await createUserWithEmailAndPassword(auth,email,password);
            let userdetailid =  credential.user
            localStorage.setItem("id",userdetailid.accessToken)
            localStorage.setItem("user",JSON.stringify(userdetailid))
            navigation('/login')
            
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div class="login-container">
    <h2>Signup</h2>
        <form method='post'>
            <input type='text' placeholder='Enter your email' onChange={(event)=>setEmail(event.target.value)}></input>
            <input type='text' placeholder='Enter your password'  onChange={(event)=>setPassword(event.target.value)}></input>
            <input type='submit' onClick={submitDataToFirebase}></input>


        </form>
        <Link to="login">Login</Link>
    </div>
  )
}
