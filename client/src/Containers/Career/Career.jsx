import React from 'react'
import './Career.scss'
import img from '../../images/logo.png'
import LocationOnIcon from '@material-ui/icons/LocationOn';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';
import {Button,Paper} from '@material-ui/core'
import { NavLink } from 'react-router-dom';

export default function Career() {
    return (
        <div>
            <div className="career_head">
                <img src={img}/>
                <span>
                    <h1 className="head_text">HELLO ! BUILD YOUR CAREER WITH US.</h1>
                </span>
            </div>
            <div className="row1" >
                <Paper className="first" style={{boxShadow:  '2px 2px 2px 2px grey'}}>
                   <h3>Business Management</h3>
                   <p>Defining requirements, tasks, and resources associated to SEO ...</p>
                   <div>
                       <LocationOnIcon style={{marginRight:'10px',marginLeft:'10px'}}/> <span>Noida</span>
                   </div>
                   <div>
                       <CalendarTodayIcon style={{marginRight:'10px',marginLeft:'10px'}}/> <span>02/07/2020</span>
                   </div>
                   <div className="apply">
                   <NavLink to="/apply" style={{textDecoration:'none'}}>
                   <Button color="secondary">
                       Apply
                   </Button>
                   </NavLink>
                   </div>
                </Paper>
                <Paper className="first" style={{boxShadow:  '2px 2px 2px 2px grey'}}>
                   <h3>Business Management</h3>
                   <p>Defining requirements, tasks, and resources associated to SEO ...</p>
                   <div>
                       <LocationOnIcon style={{marginRight:'10px',marginLeft:'10px'}}/> <span>Noida</span>
                   </div>
                   <div>
                       <CalendarTodayIcon style={{marginRight:'10px',marginLeft:'10px'}}/> <span>02/07/2020</span>
                   </div>
                   <div className="apply">
                   <NavLink to="/apply" style={{textDecoration:'none'}}>
                   <Button color="secondary">
                       Apply
                   </Button>
                   </NavLink>
                   </div>
                </Paper>
            </div>
        </div>
    )
}
