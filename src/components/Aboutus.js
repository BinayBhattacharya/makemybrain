import { textAlign } from '@mui/system'
import React, { useEffect } from 'react'

const Aboutus = () => {
  useEffect(() => {
    document.title = "About Us | MakeMyBrain"
  }, []) 
  return (
    <div style={{marginTop:'50px',marginBottom:'50px', marginLeft:'10px',marginRight:'10px' }}>
      <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'50px'}}>About Us.</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'20px',marginBottom:'20px'}}>
        Simple put, "We are a platform that appreciates the existence of Doctors!"</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'30px',fontWeight:'700',marginTop:'50px',marginBottom:'10px'}}>What do we do?</div>
      <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'10px',marginBottom:'20px'}}>Have you ever been anxious or depressed? Are you worried about your anger issues or your sleepless nights? 
        Or are you an overthinker? Well, we take our mental health very lightly. Added to that is a stigma in India, 
        "Dimaag ke doctor ke paas nahi jaayenge. Koi dekh lega to kya kahega..." But isn't our brain just like our hands and legs?
        </div>


        <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'10px',marginBottom:'20px'}}>To break through this dirty opinion about mental illness, we created MakeMyBrain. We personally handpicked psychologists who wish to 
        serve people and help them overcome their problems. Added to that are our blog services, comics and yeah... don't forget the free gift for you in the "FREE GIFTS" tab.
        we aspire to make MakeMyBrain a big brand in the field of mental 
        health. We want you to overcome all barriers at the level of mind, and stay motivated to fulfill your burning dreams.
        </div>
        <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'30px',fontWeight:'700',marginTop:'10px',marginBottom:'20px',textAlign:'center'}}>BECAUSE YOU MATTER.</div>
        <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'25px',fontWeight:'800',marginTop:'10px',marginBottom:'5px', textAlign:'right'}}>Binay Bhattacharya</div>
        <div style={{color:'#303030',fontFamily:'Segoe UI',fontSize:'20px',fontWeight:'500',marginTop:'5px',marginBottom:'20px',textAlign:'right'}}>Founder and CEO, MakeMyBrain</div>
    </div>
  )
}

export default Aboutus