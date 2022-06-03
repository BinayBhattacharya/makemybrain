import React, { useEffect } from 'react'

const Book = () => {
  useEffect(() => {
    document.title = "Get your Session NOW | MakeMyBrain"
  }, []) 
  return (
    <div style={{marginLeft:'10px',marginBottom:'100px'}}>
      <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'100px'}}>Take a Free session</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Take a heart-warming inspiring session for FREE. It's really simple!</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Call Us at 7979033873</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'30px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>OR</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Text us "Hi" on Whatsapp, and we will get in touch with you within minutes.</div>
      <a href='https://api.whatsapp.com/send?phone=7979033873&text=Take%20Session' style={{textAlign:'center',color:'white',background:'green',textDecoration:'none',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',borderRadius:'10px',padding:'5px',marginBottom:'100px'}}>Open Whatsapp</a>



      <div>
        
      </div>
    </div>
  )
}

export default Book