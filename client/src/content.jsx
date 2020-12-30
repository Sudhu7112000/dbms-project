
import { makeStyles } from '@material-ui/styles';

import showcase from "../src/img/showcase.jpg"
const useStyles = makeStyles({

    image: {
        backgroundImage: `url(${showcase})`,
        minHeight: '84.5vh',
        minWidth: '100vw',
        backgroundPosition: 'center center',
        backgroundSize: '100vw',
      },
    
  });
  
export default function Content(){
    const classes=useStyles();

    return(
        <div className={classes.image }>
        
       <p style={{textAlign:"center", fontSize:"20px",margin:"0px"}}>Enjoy your stay</p> 

         </div>

    )
       
}