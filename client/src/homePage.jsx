import React from 'react'
import Header from './header'
import { makeStyles } from '@material-ui/styles';
import hotel from './img/room.jpg';
import { Grid } from '@material-ui/core';
import Content from './content';
  

const useStyles = makeStyles(() => ({
    
    hotelImage:{
        backgroundImage: `url(${hotel})`,
      minHeight: '75vh',
      minWidth: '5vw',
      borderRadius:"50px",
      backgroundPosition: 'center center no-repeat/cover  ',
      backgroundSize: '100vw',
    }
    
  }));
function HomePage() {
    const classes= useStyles();
    
    return (
        <Grid container >
                <Grid container>  
                <Header/>
                <Content/>
            </Grid>

            

<Grid   item  xs={6} className={classes.hotelImage}><p style={{textAlign:"center",paddingTop:'200px',fontSize:"2rem"}}>
            Enjoy your stay</p></Grid>
 <Grid  item  xs={6} className={classes.hotelImage}>
</Grid>
        </Grid>
        
        
    )
}

export default HomePage