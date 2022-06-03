import { Box, Typography, AppBar, Toolbar } from '@mui/material';
import React from 'react'

const Footer = () => {
  return (
    
    <AppBar position='sticky' sx={{background: "#063960"}}>
        <Toolbar>
            <Box display="flex" marginLeft="auto" marginRight="auto">
              <Typography sx={{whiteSpace: 'pre-line'}}><div>Copyright © 2022, MakeMyBrain. All Rights Reserved.</div></Typography>
            </Box>
        </Toolbar>
    </AppBar>
    
  );

}

export default Footer