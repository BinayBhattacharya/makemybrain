import React, { useEffect } from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';


const Reviews = () => {
    useEffect(() => {
        document.title = "Reviews and Feedbacks | MakeMyBrain"
      }, [])
    
  return (
    <>
    <div style={{color:'grey',fontFamily:'Segoe UI',fontSize:'50px',fontWeight:'700',marginTop:'50px',marginBottom:'100px'}}>Reviews.</div>
    <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                I felt a lot of relief after the session. it really helped me and i 
                would love to recommend it to people who are going through something 
                and can not afford costly therapies.<br/><br/>
                <b>- Shruti Khokhar</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                Good initiative to help people and support them. They tell them some 
                solutions and listen and counsel them. It was great for me!<br/><br/>
                <b>- Chetna</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                It was actually a great interactive session. I said out things that 
                I hesitate in and it felt very light after getting it out. I would 
                try my best to to follow the instructions.<br/><br/>
                <b>- Radhika Jangra</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                It was a good session for me. My problem has been resolved mostly. 
                I would love to take more sessions from MakeMyBrain.<br/><br/>
                <b>- Mushkan Saha</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>

        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                The session was good and quite helpful... got to know 
                some techniques whish will surely help to improve my 
                mental health.<br/><br/>
                <b>- Smita Gaikwad</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card1' sx={{ maxWidth: 400,background:'white' }}>
          <CardActionArea>
            
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'#363636',fontFamily:'Segoe UI',fontWeight:'500'}}>
                The session was really good. The counseller listened to 
                me patiently and made me realise that everything is possible. 
                We just have to look through the ways.<br/><br/>
                <b>- Pooja Tilwani</b>
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        
      </div>

    </>
  )
}

export default Reviews