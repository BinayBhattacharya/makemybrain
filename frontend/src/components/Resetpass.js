import React from 'react'

const Resetpass = () => {
  return (
    <div>
        <h1 id="signup_head">Reset Password</h1>
    <form>
        
        <label className='signup_form'>
            Enter new password<br/>
            <input type="text" className='signup_box'/>
        </label><br/>
        <label className='signup_form'>
            Enter password again<br/>
            <input type="text" className='signup_box'/>
        </label><br/>
        <input type="Submit" id='loginn_button'/>
    </form>
    <div id='login_logo'><br/><br/>MakeMyBrain</div>
    </div>
  )
}

export default Resetpass