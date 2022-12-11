import React from 'react'
import './Profile.css'
import propic from '../media/kaira.jfif'
import { Link } from 'react-router-dom'

const Profile = () => {
  return (
    <div id='profile'>
        <header id='heading'>
            My Profile
        </header>
        <div id='myprofile'>
            <img src={propic} alt='profile pic' id='propic'/>
            <h1 id='username'>UserName</h1><br/>
        </div>
        <div id='profile_list'>
                <Link to="/editprofile" className='profile_opt'>Edit Profile</Link><br/>
                <Link to="#" className='profile_opt'>Invite Friends</Link><br/>
                <Link to="#" className='profile_opt'>About</Link><br/>
                <Link to="#" className='profile_opt'>Logout</Link><br/>
            </div>
    </div>
  )
}

export default Profile