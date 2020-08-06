import React from 'react'
import './Team.scss'
import img from '../../images/team.jpg'
import img1 from '../../images/team_pic.jpg'
import {Button,Paper,Card,CardMedia,CardContent,Typography,CardActionArea} from '@material-ui/core'

export default function Team() {
    return (
        <div>
           <div className="team_head">
             <h1>
                <span>MEET</span> OUR TEAM
             </h1>
           </div>
           <div className="team_dis">
               <div className="text">
                   " Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum"
               </div>
               <div className="img">
                 <img src={img} />
               </div>
           </div>
           <div className="team_list">
              <div className="root_team">
              <div className="cards1">
              <Card style={{ borderTopRightRadius: '50px',borderBottomLeftRadius: '50px'}}>
                <CardActionArea>
                    <img src={img1} style={{width:'100%'}}/>
                </CardActionArea> 
              </Card>
              </div>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:'Bebas Neue'}}>
                  Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p"  style={{fontFamily:'Bebas Neue'}}>
                 Ass. Manager
              </Typography>
              </CardContent>
              </div>
              <div className="root_team">
              <div className="cards2">
              <Card style={{ borderTopLeftRadius: '50px',borderBottomRightRadius: '50px'}}>
                <CardActionArea>
                    <img src={img1} style={{width:'100%'}}/>
                </CardActionArea>  
              </Card>
              </div>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2"  style={{fontFamily:'Bebas Neue'}}>
                  Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Bebas Neue'}}>
                 Ass. Manager
              </Typography>
              </CardContent>
              </div>
              <div className="root_team">
              <div className="cards1">
              <Card style={{ borderTopRightRadius: '50px',borderBottomLeftRadius: '50px'}}>
                <CardActionArea>
                    <img src={img1} style={{width:'100%'}}/>
                </CardActionArea> 
              </Card>
              </div>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:'Bebas Neue'}}>
                  Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Bebas Neue'}}>
                 Ass. Manager
              </Typography>
              </CardContent>
              </div>
              <div className="root_team">
              <div className="cards2">
              <Card style={{ borderTopLeftRadius: '50px',borderBottomRightRadius: '50px'}}>
                <CardActionArea>
                    <img src={img1} style={{width:'100%'}}/>
                </CardActionArea>  
              </Card>
              </div>
              <CardContent>
              <Typography gutterBottom variant="h5" component="h2" style={{fontFamily:'Bebas Neue'}}>
                  Lorem Ipsum
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" style={{fontFamily:'Bebas Neue'}}>
                 Ass. Manager
              </Typography>
              </CardContent>
              </div>
           </div>
        </div>
    )
}
