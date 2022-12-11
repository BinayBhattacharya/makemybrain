import React from 'react'

const Editprofile = () => {
  return (
    <div>
        <h1 id='signup_head'>Edit Profile</h1>
    <form id='signup'>
        <label className='signup_form'>
            Change username<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <label className='signup_form'>
            Change your profile pic<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <label className='signup_form'>
            Change password<br/>
        </label>
            <input type="text" className='signup_box'/>
        <br/>
        <input type="Submit" id='signup_button'/>
    </form>
    <div id='signup_logo'>MakeMyBrain</div>
    </div>
  )
}

export default Editprofile