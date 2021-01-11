import { Grid ,Button, TextField } from "@material-ui/core";
import Header from "./header";
import React from 'react'
import Footer from "./footer";
import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(() => ({

  footer: {
    direction: 'row',
    justify: 'center',
    alignContent: 'flex-end',
    position: 'absolute',
    bottom: '0vh',
  },
}));
export default function Booking(){

  const classes = useStyles();

  return(
    
    <Grid container>

      <Grid item xs={12}>
        <Header/>
      </Grid>
      <Grid container xs={12} style={{marginTop:"45px"}} justify="center" >
          <Grid container justify="center">
          <h1 style={{paddingLeft:"2px",paddingBottom:"20px" , fontSize:"38px"}}>
          <span  style={{color:"#EB984E"}} > BOOKING  </span> PAGE  </h1>        
                    
                  <Grid container justify="center">
                    

                   
            
                  
            
            
           
            
            <Grid item xs={7}  style={{fontSize:"15px",paddingBottom:"20px"}}>CHECK-IN:
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                type="date"
                name="checkin"
              />
            </Grid>
            <Grid item xs={7}  style={{fontSize:"15px",paddingBottom:"20px"}}>CHECK-OUT:
              <TextField
                variant="outlined"
                required
                fullWidth
                id="name"
                type="date"
                name="checkout"
              />
            </Grid>
            </Grid>
                    <Grid container justify="center">
                      <Button
            type="submit"
            variant="contained"
            color="tan"
            style={{marginBottom:"60px",marginTop:"25px"}}
          >
            BOOK
          </Button>
                    </Grid>
                   
          </Grid>
                    

               
          </Grid>
          <Grid item container className={classes.footer}>
        <Footer />
      </Grid> 
    </Grid>
  )
}