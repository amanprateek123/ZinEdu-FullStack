import React from 'react'
import {Button,Paper,Card,CardMedia,CardContent,Typography,CardActionArea} from '@material-ui/core'
import img from "../../images/Blog.jpg"

export default function Blogs() {
    return (
        <div>
        <Card>
         <CardActionArea>
         <img src={img} style={{width:'100%'}}/>
         <CardContent>
         <Typography gutterBottom variant="h5" component="h2">
            HOW TO SCORE GOOD IN NEET
          </Typography>    
        <Typography variant="body2" color="textSecondary" component="p">
          This impressive paella is a perfect party dish and a fun meal to cook together with your
          guests. Add 1 cup of frozen peas along with the mussels, if you like.
        </Typography>
        <div style={{textAlign:'center',marginTop:'3%'}}>
        <Button color="secondary" size="large">Read More</Button>
        </div>
      </CardContent>
             </CardActionArea>   
       
        </Card>
        </div>
    )
}
