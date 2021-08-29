import React from 'react'
import Button from '@material-ui/core/Button';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { Grid } from '@material-ui/core';
import { useHistory } from 'react-router';

import '../styles.css'

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
      margin: 250,
      marginLeft:420,
    },
  }));
  
  export default function Home( {parentCall} ) {
    const classes = useStyles();
    const history = useHistory();


  
    return (
      <div>
        <Container>

            <Grid container spacing={3} >
                <Grid item xs={12} sm={6} md={3} >
                    <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={ ()=> {history.push('/game'); parentCall('host');} }>
                        Host
                    </BootstrapButton>
                </Grid>

                <Grid item xs={12} sm={6} md={3} className='btn-1'>
                    <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin} onClick={ ()=> {history.push('/game'); parentCall('player');} }>
                        Player
                    </BootstrapButton>
                </Grid>
            </Grid>
        </Container>
      </div>
    );
  }