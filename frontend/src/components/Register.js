import React from 'react';
import { Link } from 'react-router-dom';
import './Register.css';

const Register = () => {
  return (
    <div>
        
        <h1 id='register_head'>
            Someone is waiting inside...
        </h1>
        <Link to='/signup' id='sign_up_button'>Sign Up</Link>
        <div id='login_head'>If you already have an account</div>
        <Link to='/login' id='login_button'>Login</Link>
        <div id='text_logo'>MakeMyBrain</div>
    </div>
  )
}

export default Register