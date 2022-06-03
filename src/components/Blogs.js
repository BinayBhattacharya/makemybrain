import React, { useEffect } from 'react'

const Blogs = () => {
  useEffect(() => {
    document.title = "Blogs on Mental Health | MakeMyBrain"
  }, []) 
  return (
    <div style={{marginTop:'50px',marginBottom:'50px', marginLeft:'10px',marginRight:'10px' }}>
    <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'50px'}}>Blogs.</div>
    </div>
  )
}

export default Blogs