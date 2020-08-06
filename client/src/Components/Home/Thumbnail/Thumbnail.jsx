import React, { Component } from 'react'
import './Thumbnail.scss'

export default class Thumbnail extends Component {
   state={   
           title:"Student",
           body:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
           class:""
       }
   
  changeHandle1=()=>{
       this.setState(
            {   
            title:"Teacher",
            body:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            class:"transform_circle"
       })
   }
   changeHandle2=()=>{
       this.setState(
        {
            title:"Parents",
            body:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            class:"transform_circle"
       }
       )
   }
   changeHandle3=()=>{
    this.setState(
        {   
            title:"Student",
            body:"Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum Lorem Ipsum",
            class:"transform_circle"
        }
    )
   }

    render() {
        return (
            <div>
            <div className="thumb">
                <div className="thumb_bg">
                    <div className="frame">
                        <div className="frame_bg">
                        </div>
                    </div>
                        <div className="circle1" onClick={this.changeHandle1}>
                        </div>
                        <div className="circle2" onClick={this.changeHandle2}>
                        </div>
                        <div className="circle3" onClick={this.changeHandle3}>
                        </div>
                     <div className="frame_detail">
                         <h1>
                             {this.state.body}
                         </h1>
                         <p>
                             - {this.state.title}
                         </p>
                         </div> 
                </div>
            </div>
            </div>
        )
    }
}
