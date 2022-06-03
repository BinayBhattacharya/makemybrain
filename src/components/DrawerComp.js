import { Drawer,IconButton,List, ListItemButton, ListItemIcon, ListItemText, Tab, Tabs} from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';

const DrawerComp = () => {
    const [openDrawer,setOpenDrawer] = useState(false)
    
  return (
    <React.Fragment>
        <Drawer open={openDrawer} 
           onClose={()=>setOpenDrawer(false)}
        >
            
            
            
            
            <List>
              <ListItemButton onClick={()=>setOpenDrawer(false)}>
                  <ListItemIcon>
                      <ListItemText>
                          
                          <div style={{lineHeight:'60px',fontFamily:'Segoe UI', fontSize:'17px',fontWeight:'350'}}>
                          <a href='/book' style={{textDecoration:'none',color:'grey'}}>Take a <b>FREE</b> Session</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/' style={{textDecoration:'none',color:'grey'}}>Home</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/freegifts' style={{textDecoration:'none',color:'grey'}}>Free Gifts</a>
                          <a href='/freegifts' style={{textDecoration:'none',borderRadius:'20px',padding:'2px',background:'red',color:'yellow',fontSize:'10px',fontWeight:'600', position:'relative',left:'5px',top:'-10px'}}>New!</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/reviews' style={{textDecoration:'none',color:'grey'}}>Reviews</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/blogs' style={{textDecoration:'none',color:'grey'}}>Blogs</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/comic' style={{textDecoration:'none',color:'grey'}}>Comics</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/aboutus' style={{textDecoration:'none',color:'grey'}}>About Us</a><br/>
                          <hr style={{background:'grey',color:'grey', marginLeft:'-14px', width:'120%'}}/>
                          <a href='/contactus' style={{textDecoration:'none',color:'grey'}}>Contact Us</a><br/>
                          </div>
                      </ListItemText>
                      
                  </ListItemIcon>
              </ListItemButton>
                
                
            </List>
        </Drawer>
        <IconButton sx={{marginLeft:'auto'}} onClick={()=>setOpenDrawer(!openDrawer)}>
            <MenuIcon/> 
        </IconButton>
    </React.Fragment>
  )
}

export default DrawerComp