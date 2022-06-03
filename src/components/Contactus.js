import React, { useEffect } from 'react'

const Contactus = () => {
  useEffect(() => {
    document.title = "Contact Us | MakeMyBrain"
  }, [])
  return (
    <div style={{marginLeft:'10px',marginBottom:'100px'}}>
      <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'100px'}}>Get in touch with us.</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Mail Us at binaybhattacharya558@gmail.com</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Call Us at 7979033873</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>Chat with us on Whatsapp</div>
      <a href='https://api.whatsapp.com/send?phone=7979033873&text=Hello%20MakeMyBrain' style={{textAlign:'center',color:'white',background:'green',textDecoration:'none',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',borderRadius:'10px',padding:'5px',marginBottom:'100px'}}>Open Whatsapp</a>
    </div>
  )
}

export default Contactus