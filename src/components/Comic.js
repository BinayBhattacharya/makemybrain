import React, { useEffect } from 'react'

const Comic = () => {
  useEffect(() => {
    document.title = "Comics on Mental Health | MakeMyBrain"
  }, [])
  return (
    <div style={{marginTop:'50px',marginBottom:'50px', marginLeft:'10px',marginRight:'10px' }}>
    <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'50px'}}>Comics.</div>
    </div>
  )
}

export default Comic