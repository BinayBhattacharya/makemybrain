import React from 'react'
import { Link } from 'react-router-dom'
import './Login.css';

const Login = () => {
  return (
    <div>
    <h1 id="signup_head">Login</h1>
    <form>
        
        <label className='signup_form'>
            Enter your email ID<br/>
            <input type="text" className='signup_box'/>
        </label><br/>
        <label className='signup_form'>
            Enter your password<br/>
            <input type="text" className='signup_box'/>
        </label><br/>
        <input type="Submit" id='loginn_button'/>
    </form>
    <div id='forgot_password'>Forgot password? <Link to="/forgot-password" id='forgot_link'>Click Here</Link></div>
    <div id='login_logo'>MakeMyBrain</div>
    </div>
  )
}

export default Login