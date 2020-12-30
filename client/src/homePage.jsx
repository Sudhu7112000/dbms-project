import React from 'react'
import Header from './header'
import { makeStyles } from '@material-ui/styles';
import HomePageCard from './homePageCard';
import { Grid } from '@material-ui/core';
import Content from './content';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import LocationOnIcon from '@material-ui/icons/LocationOn';
  

const useStyles = makeStyles(() => ({
  root: {
    minWidth:"32vw",
    margin:"6.2px"
  }, 
  }));
function HomePage() {
    const classes= useStyles();
    
    return (
  <Grid container>
          <Grid item container style={{marginBottom:"5px"}}> 
              <Header/>
              <Content/>
          </Grid>
          <h1 style={{textAlign:"center",width:"100%",margin:"auto",fontFamily:"sans-serif",backgroundColor:"#222",color:"#E59866",padding:"12px 0",fontWeight:"200"}}>Our  <span style={{color:"#fff"}}> Rooms</span> </h1>
          <Grid item container>
            <Grid item  >
              <HomePageCard/>
            </Grid>
            <Grid item  >
              <HomePageCard/>
            </Grid>
            <Grid item  >
              <HomePageCard/>
            </Grid>
            <Grid item  >
              <HomePageCard/>
            </Grid>
          </Grid>
          <Grid item container>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"orange"}}>
                <CardContent>
                  <LocationOnIcon></LocationOnIcon>
                  <Typography  gutterBottom>
          Word of the Day
        </Typography>
                  
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"grey"}}>
                <CardContent>
                  <LocationOnIcon></LocationOnIcon>
                  <Typography  gutterBottom>
          Word of the Day
        </Typography>
                  
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
            <Grid item>
                <Card className={classes.root} style={{backgroundColor:"orange"}}>
                <CardContent>
                  <LocationOnIcon></LocationOnIcon>
                  <Typography  gutterBottom>
          Word of the Day
        </Typography>
                  
                  <Typography variant="body2" component="p">
                    well meaning and kindly.
                    <br />
                    {'"a benevolent smile"'}
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </Grid>
          </Grid>
        </Grid>
        
        
    )
}

export default HomePage