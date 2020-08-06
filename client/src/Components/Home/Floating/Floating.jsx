import React, { Component } from 'react'
import {Fab} from '@material-ui/core'
import { Add as AddIcon } from '@material-ui/icons';
import './Floating.scss'
import img1 from '../../../images/facebook.png'
import img2 from '../../../images/instagram.png'
import img3 from '../../../images/youtube.png'
import img4 from '../../../images/whatsapp.png'
import img5 from '../../../images/twitter.png'

export default class Floating extends Component {
    state={
        visible:false
    }

    toggleHidden = ()=>{
        this.setState({visible:!this.state.visible})
    }
    render() {
        let social = null;
        if(this.state.visible){
             social = (
                <div style={{display:'flex',flexDirection:'column',color:'white',position:'relative',right:'-12px',top:'10px',transition:'2s ease-in'}}>
                <a href="http://www.facebook.com/zinedulive" className="hello_img" target="_blank"><img src={img1} alt="pic" /></a>
                <a href="#" className="hello_img"><img src={img2} alt="pic" target="_blank" /></a>
                <a href="http://www.youtube.com/channel/UCT8K86a0UfNDV77-l6cWXSg" className="hello_img" target="_blank"><img src={img3} alt="pic" /></a>
                <a href="https://wa.link/z8dbiv" className="hello_img" target="_blank"><img src={img4} alt="pic"/></a>
                <a href="#" className="hello_img" target="_blank"><img src={img5} alt="pic"/></a>
            </div>
            )
        }
        return (
            <div className="float" onMouseEnter={this.toggleHidden} onMouseLeave={this.toggleHidden}>
                <Fab color="inherit" aria-label="add" style={{backgroundColor:'rgb(255,81,81)',color:'white'}} >
                     <AddIcon />
                </Fab>   
                {social}
            </div>
        )
    }
}
