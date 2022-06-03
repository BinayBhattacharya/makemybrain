import React, { useEffect } from 'react';
import cover1 from '../media/book1 cover.jpg';
import book1 from "../media/You_Will_Make_It_EDITION_1.pdf";

const Freegifts = () => {
  useEffect(() => {
    document.title = "Gifts for You | MakeMyBrain"
  }, []) 
  return (
    <div style={{marginTop:'50px',marginBottom:'50px', marginLeft:'10px',marginRight:'10px' }}>
    <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'50px'}}>Gifts for You.</div>
    <div style={{color:'#3d3d3d',fontFamily:'Segoe UI',fontSize:'23px',fontWeight:'500',marginTop:'50px',marginBottom:'50px'}}>All our Editions of the series "You Will Make It" are uploaded here. Click on the book you wish to download.</div>
    <div style={{display:'flex', flexDirection:'row',flexWrap:'wrap',justifyContent:'center'}}><a href={book1}><img src={cover1} style={{width:'200px'}}/></a></div>
    </div>
  )
}

export default Freegifts