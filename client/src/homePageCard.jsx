
import React ,{useState,useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


import axios from 'axios';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles({
  root: {
    minWidth: '24vw',
    margin:"4.5px"
  },
  
});

export default function HomePageCard() {
  const classes = useStyles();
  const [rooms,setRooms]=useState([]);
  useEffect(()=>{
  
    axios
    .get('http://localhost:3000/getRooms')
    .then(res=>{
    console.log(res.data)
    setRooms(res.data.data)
    }) 
    
  },[]);

  return (
    <Grid container>
      {
    rooms.map((room) => {
      return (
    <Card className={classes.root} key={room.id}>
      <CardActionArea>
        <CardMedia
          style={{ height:'50vh',
          backgroundImage:`url(${room.room_image})`}}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {room.room_type}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            PRICE:{room.room_price}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="  
        ">
          BOOK NOW
        </Button>
      </CardActions>
    </Card>
      );
    })}
    </Grid>
  );
}
