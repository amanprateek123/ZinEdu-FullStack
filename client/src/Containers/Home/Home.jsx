import React, { Component } from 'react'
import Exclusive from '../../Components/Home/Exclusive/Exclusive'
import Enroll from '../../Components/Home/Enroll/Enroll'
import Partner from '../../Components/Home/Partner/Partner'
import Stats from '../../Components/Home/Stats/Stats'
import Thumbnail from '../../Components/Home/Thumbnail/Thumbnail'
import Footer from '../../Components/Home/Footer/Footer'

export default class Home extends Component {
    render() {
        return (
            <React.Fragment>
                <div style={{backgroundColor:"#f3f3f3"}}>
                <Exclusive modal={this.props.modal}/>
                <Enroll/>
                <Partner open={this.props.open}/>
                <Stats/>
                <Thumbnail/>
                <Footer/>
                </div>
            </React.Fragment>
        )
    }
}
