import React from 'react';
import './Signup.css';

const Signup = () => {
  return (
    <div>
    <h1 id='signup_head'>Sign Up</h1>
    <form id='signup'>
        <label className='signup_form'>
            Enter a unique username<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <label className='signup_form'>
            Enter your email ID<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <label className='signup_form'>
            Enter a strong password<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <input type="Submit" id='signup_button'/>
    </form>
    <div id='signup_logo'>MakeMyBrain</div>
    </div>
  )
}

export default Signup