import React,{useState} from 'react'
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import '../styles.css'

import { withStyles, makeStyles } from '@material-ui/core/styles';

const BootstrapButton = withStyles({
    root: {
      boxShadow: 'none',
      textTransform: 'none',
      fontSize: 16,
      padding: '6px 12px',
      border: '1px solid',
      lineHeight: 1.5,
      backgroundColor: '#0063cc',
      borderColor: '#0063cc',
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:hover': {
        backgroundColor: '#0069d9',
        borderColor: '#0062cc',
        boxShadow: 'none',
      },
      '&:active': {
        boxShadow: 'none',
        backgroundColor: '#0062cc',
        borderColor: '#005cbf',
      },
      '&:focus': {
        boxShadow: '0 0 0 0.2rem rgba(0,123,255,.5)',
      },
    },
  })(Button);

  const useStyles = makeStyles((theme) => ({
    margin: {
      marginLeft:'42%',
    },
  }));


export default function BottomerPlayer() {
    const classes = useStyles();
    const [word, setWord] = useState('');

    return (
        <div className='inp-1'>
            <Grid item xs={12}>
                <input  type='text' placeholder='Enter Your Guess!' value={word} onChange={(e)=>{setWord(e.target.value)}} />
            </Grid>

            <Grid item xs={12}>
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={ ()=> { word==='Java'?window.alert("Gussed Correct😎"):window.alert("You're Worng:(") } }>
                    Submit
                </BootstrapButton>
            </Grid>
        </div>
    )
}
