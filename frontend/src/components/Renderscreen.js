import React from 'react'
import './Renderscreen.css'
import logo from '../media/logo.png';
import { Link } from 'react-router-dom';

const Renderscreen = () => {
  return (
    <div id='go_screen'>
        &nbsp;
        <img src={logo} alt='MakeMyBrain' id='go_logo' />
        <h1 id='main_head'>MakeMyBrain</h1>
        <h2 id='sub_head'>BECAUSE YOU MATTER</h2>
        <Link to='/go' id='go_button'>Go</Link>
    </div>
  )
}

export default Renderscreen