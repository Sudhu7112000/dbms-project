import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    opacity:"0.8",
    zIndex:"2",
  

  },
  menuButton: {
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
    fontSize:"1.7rem",
    
  },
  button:{
    '&:hover':{
      color:"#EB984E",
      borderBottom:"1px solid #EB984E"
    }
  }
}));

export default function Header() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      <AppBar position="fixed" style={{backgroundColor:"#000",maxwidth:"100vw"}}>
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
         <AccountBalanceIcon></AccountBalanceIcon>
          </IconButton>
          <Typography variant="h6" className={classes.title}>
           <span style={{color:"#EB984E"}}>SkyLine</span> Hotel
          </Typography>
          <Button className={classes.button} color="inherit">Home</Button>
          <Button className={classes.button} color="inherit">About</Button>
          <Button className={classes.button} color="inherit">Contact</Button>
          <Button className={classes.button} color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
    </Grid >
  );
}
