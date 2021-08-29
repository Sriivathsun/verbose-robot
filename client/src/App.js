import React,{useEffect} from 'react';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

import {socket, createconnection} from './socket';

import './styles.css';

import ImageCard from './components/ImageCard';


function App() {
  
  /*https://picsum.photos/id/0/1920/1080*/

  let urlList=[];
  for (let i= 14; i< 26; i++) {
    urlList.push(`https://picsum.photos/id/${i}/500`);
  }
  //createconnection();
  //console.log('parent render')

  
  useEffect(() => {
    //console.log('parent',socket)
    createconnection();
    //console.log('parent',socket)
    console.log('parent useeffect')

    socket.on('changed',(url,color)=>{
      console.log(color)
      document.getElementById(url).style.borderColor = color==='rgb(26, 115, 232)'?'transparent':(color==='transparent'?'rgb(26, 115, 232)':'rgb(26, 115, 232)');
      console.log(document.getElementById(url).style.borderColor);
    })

  },[])
  



  return (
    <div  className="background" >
      <Container>

        <Typography component="div" style={{ backgroundColor: '#202023', height: '100vh' }} >

          <Grid container spacing={3}>

            {
              urlList.map( (url,index)=>{
                return(
                  <Grid key={index} item xs={12} sm={6} md={3} >
                    <ImageCard url={url} />
                  </Grid>
                )           
              })
            }

          </Grid>

        </Typography>
      
      </Container>

    </div>
  );
}

export default App;