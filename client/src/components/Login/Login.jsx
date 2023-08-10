/* eslint-disable no-unused-vars */
import React from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
  return (
    <div className='login-div'>
        <h3>Log in</h3>
        <input type="text" placeholder='username' />
        <input type="text" placeholder='password' />
        <button onClick={()=>navigate("/main")}>Sign in</button>
    </div>
  )
}
