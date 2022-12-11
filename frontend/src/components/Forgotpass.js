import React from 'react'
import './Forgotpass.css'

const Forgotpass = () => {
  return (
    <div>
        <h1 id="signup_head">Forgot Password</h1>
    <form>
        
        <label className='signup_form'>
            Enter your email ID<br/>
            <input type="text" className='signup_box'/>
        </label><br/>
        <div id='statement'>We will send you a link through your email using which you can reset your password.</div>
        <input type="Submit" id='loginn_button'/>
    </form>
    <div id='login_logo'><br/><br/>MakeMyBrain</div>
    </div>
  )
}

export default Forgotpass