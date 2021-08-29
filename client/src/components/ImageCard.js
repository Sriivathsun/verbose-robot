import React from 'react';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardMedia from '@material-ui/core/CardMedia';

import { makeStyles, } from '@material-ui/core/styles';

import '../styles.css'
import { socket } from '../socket';

let useStyles = makeStyles({
    root: {
      maxWidth: 345,
      
    },
    media: {
      height: 140,
      weight: 140,

    },
  });

  


export default function ImageCard( {url} ) {

    //console.log('child',socket)

    const classes = useStyles();
    


    //function to change color of margin
    let clicked = () => {
        socket.emit('changed',url,document.getElementById(url).style.borderColor)
        document.getElementById(url).style.borderColor = (document.getElementById(url).style.borderColor==='rgb(26, 115, 232)'?'transparent':(document.getElementById(url).style.borderColor==='transparent'?'rgb(26, 115, 232)':'rgb(26, 115, 232)'));
        console.log(document.getElementById(url).style.borderColor)
    };



    return (
        <div className='div-1' onClick= {clicked} id={url}>
            <Card className={classes.root} >
                <CardActionArea>
                    <CardMedia
                        className={classes.media}
                        image={url}
                        title={url}
                    />
                </CardActionArea>
            </Card>
        </div>
    )
}
