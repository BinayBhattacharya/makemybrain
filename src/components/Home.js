import React, { useEffect } from 'react'
import titleImage from "../media/homepagetop.png";
import { Link } from 'react-router-dom';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Button, CardActionArea, CardActions } from '@mui/material';
import anger from '../media/anger.jpg';
import stress from "../media/stress free.jpg";
import breakup from "../media/breakup.jpg";
import depression from "../media/depression.jpg";
import sleep from '../media/sleepless.jpg';
import breakups from '../media/breakup.jpg';
import mood from '../media/mood swings.jpg';
import schizo from '../media/schizophrenia.jpg';
import fear from '../media/fear.jpg';
import toxic from '../media/toxic.jpg';
import social from '../media/social anxiety.jpg';

function Home() {
  useEffect(() => {
    document.title = "Consult Top Psychologists Online Free | MakeMyBrain"
  }, [])

  return (
    <>

      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ display: 'flex', flexDirection: 'column', flexWrap: 'nowrap' }}>
          <div style={{ fontFamily: 'Segoe UI', fontSize: 50, marginLeft: '10%', marginTop: '5%', fontWeight: 700, color: 'grey' }}>Consult Top<br />Psychologists<br/> Online at the<br/> Best price ever!</div>
          <div style={{ fontFamily: 'Segoe UI', fontSize: 22, letterSpacing: '3px', marginLeft: '10%', fontWeight: 400, color: 'grey' }}>Because You Matter.</div>
          <div style={{ fontFamily: 'Segoe UI', fontSize: 25, marginLeft: '10%', width: '50%', marginTop: '5%', fontWeight: 500, color: 'white', background: 'orange', marginBottom: '10px', borderRadius: '100px', textAlign: 'center' }}><a href='/book' color='white' style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }}>Take a FREE<br />session</a></div>
        

        <div style={{ fontFamily: 'Segoe UI', fontSize: 25, marginLeft: '10%', width: '50%', marginTop: '5%',marginTop:'20px', fontWeight: 500, color: 'white', background: '#118a6d', marginBottom: '10px', borderRadius: '100px', textAlign: 'center' }}><a href='/reviews' color='white' style={{ textDecoration: 'none', color: 'white', textAlign: 'center' }}>Read Reviews</a></div>
        </div>


        <div><img src={titleImage} alt='MakeMyMind' width={550} /></div>
      </div>
      <div style={{ zIndex: 10, textAlign: 'center', color: '#404040', fontFamily: 'Segoe UI', fontSize: 27, marginTop: '60px', marginBottom: '100px', fontWeight: 600 }}><i>"Medicines can cure your disease,<br />But only a Doctor can heal You."</i></div>
      <hr style={{ background: '#063960', width: '200px', height: '5px', marginBottom: '100px' }} />
      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
        <div style={{ margin: '10px', height: '300px', width: '300px', background: 'white', borderRadius: '50%', position: 'relative', boxShadow: '8px 8px 15px grey' }}>
          <div style={{ color: '#004d28', fontSize: '27px', fontWeight: '700', fontFamily: 'Segoe UI', position: 'absolute', width: 'inherit', height: 'auto', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            Speak out<br /> your heart to<br />100% Trusted<br />Psychologists<br />online.</div>
        </div>
        <div style={{ margin: '10px', height: '300px', width: '300px', background: 'white', borderRadius: '50%', position: 'relative', boxShadow: '8px 8px 15px grey' }}>
          <div style={{ color: '#004d28', fontSize: '27px', fontWeight: '700', fontFamily: 'Segoe UI', position: 'absolute', width: 'inherit', height: 'auto', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            Get a FREE<br />session and<br />amazing gifts<br />NOW!</div>
        </div>
        <div style={{ margin: '10px', height: '300px', width: '300px', background: 'white', borderRadius: '50%', position: 'relative', boxShadow: '8px 8px 15px grey' }}>
          <div style={{ color: '#004d28', fontSize: '27px', fontWeight: '700', fontFamily: 'Segoe UI', position: 'absolute', width: 'inherit', height: 'auto', top: '50%', transform: 'translateY(-50%)', textAlign: 'center' }}>
            Enjoy free<br />quality blogs<br />and comics from<br />your favorite<br />website.</div>
        </div>
      </div>
      <hr style={{ background: '#063960', width: '200px', height: '5px', marginTop: '100px', marginBottom: '100px' }} />
      <div style={{ textAlign: 'center', fontFamily: 'Segoe UI', fontSize: '30px', color: 'grey',marginBottom:'100px', fontWeight: '700' }}>Talk to your Psychologist and Transform your Life</div>





      <div style={{ display: 'flex', flexDirection: 'row', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
        <Card id='card1' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={depression}
              alt="Depression" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Depression and<br/>Anxiety
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>


        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={anger}
              alt="Anger" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Anger Issues
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>


        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={sleep}
              alt="Sleepless" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Sleep Disorders
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>


        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={breakups}
              alt="Breakup" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Breakups and<br/>Relationship<br/>Issues
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={mood}
              alt="Mood Swings" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Mood Swings
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={schizo}
              alt="Schizophrenia" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Schizophrenia
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        


        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={fear}
              alt="Fear" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Fear Issues
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={toxic}
              alt="Toxic parents" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Toxic Family
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>

        <Card id='card2' sx={{ width: 200,background:'#063960' }}>
          <CardActionArea>
            <CardMedia
              component="img"
              height="140"
              image={social}
              alt="Social Anxiety" />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'20px',textAlign:'center', color:'white',fontFamily:'Segoe UI',fontWeight:'700'}}>
                Social Anxiety
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
        <Card id='card2' sx={{ width: 200 }}>
          <CardActionArea >
            
            <CardContent >
              <Typography gutterBottom variant="h5" component="div" style={{fontSize:'30px',marginTop:'40px',textAlign:'center', color:'black',fontFamily:'Segoe UI',fontWeight:'700'}}>
                And Many More...
              </Typography>
              
            </CardContent>
          </CardActionArea>
          
        </Card>
      </div>

      

      






 

    </>
  );
}

export default Home

