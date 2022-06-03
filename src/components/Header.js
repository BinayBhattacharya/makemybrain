import React from 'react';
import {AppBar, Toolbar, Typography, Box, Button, Tabs, Tab, useMediaQuery, useTheme} from "@mui/material";
import { Link } from 'react-router-dom';
import DrawerComp from './DrawerComp';

/*const Header = () => {
  return (
    
    <AppBar position='sticky' sx={{background: "white"}}>
        <Toolbar>
            <Typography variant="h5" sx={{color: "#0c2854", fontFamily:'Segoe UI',fontWeight:700}}><a href='/' style={{textDecoration:'none', color:'#0c2854'}}>MakeMyBrain</a></Typography>
              
            <Box display="flex" marginLeft="auto" marginRight="auto">
              <Tabs>
                <Tab LinkComponent={ Link } to='/' label="Home" sx={{color:"grey",fontFamily:"Segoe UI"}} />
                <Tab LinkComponent={ Link } to='/freegifts' label="Free Gifts" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                <Tab LinkComponent={ Link } to='/blogs' label="Blogs" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                <Tab LinkComponent={ Link } to='/comic' label="Comics" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                <Tab LinkComponent={ Link } to='/aboutus' label="About Us" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                <Tab LinkComponent={ Link } to='/contactus' label="Contact Us" sx={{color:"grey",fontFamily:"Segoe UI"}}/>

              </Tabs>
            </Box>
            
            <Box display="flex" marginLeft="auto">
                <Button LinkComponent={ Link } to='/book' variant='contained' sx={{margin: 1,color:"white",borderRadius:10,background:"orange", fontSize:15}}>Get a FREE session</Button>
            </Box>
        </Toolbar>
    </AppBar>
  );

}

export default Header*/


/*import { AppBar, Toolbar, Typography } from '@mui/material';
import React from 'react';*/

const PAGES = ['Home','Free Gifts','Blogs','Comics','About Us','Contact Us']

function Header() {
    const theme = useTheme();
    console.log(theme);
    const isMatch = useMediaQuery(theme.breakpoints.down('md'));
    console.log(isMatch);
  return (
    <React.Fragment>
      <AppBar position='sticky' sx={{background: "white"}}>
        <Toolbar>
        <Typography variant="h5" sx={{color: "#0c2854", fontFamily:'Segoe UI',fontWeight:700}}><a href='/' style={{textDecoration:'none', color:'#0c2854'}}>MakeMyBrain</a></Typography>

          {
            isMatch ? (
              <>
              <Typography>
                MakeMyBrain
              </Typography>
              <DrawerComp/>
              </>
            ) : (
              <>
              
              <Box display="flex" marginLeft="auto" marginRight="auto">
                <Tabs>
                <Tab LinkComponent={ Link } to='/' label="Home" sx={{color:"grey",fontFamily:"Segoe UI"}} />
                  <Tab LinkComponent={ Link } to='/freegifts' label="Free Gifts" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                  <Tab LinkComponent={ Link } to='/reviews' label="Reviews" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                  <Tab LinkComponent={ Link } to='/blogs' label="Blogs" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                  <Tab LinkComponent={ Link } to='/comic' label="Comics" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                  <Tab LinkComponent={ Link } to='/aboutus' label="About Us" sx={{color:"grey",fontFamily:"Segoe UI"}}/>
                  <Tab LinkComponent={ Link } to='/contactus' label="Contact Us" sx={{color:"grey",fontFamily:"Segoe UI"}}/>












                </Tabs>
                <Box display="flex" marginLeft="auto">
                  <Button LinkComponent={ Link } to='/book' variant='contained' sx={{margin: 1,color:"white",borderRadius:10,background:"orange", fontSize:12,textAlign:'center'}}>Take a FREE session</Button>
              </Box>
              </Box>
              </>
            )
          }

              
             

        </Toolbar>
        
      </AppBar>
    </React.Fragment>
  );
}

export default Header