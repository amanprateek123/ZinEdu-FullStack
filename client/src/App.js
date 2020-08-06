import React, { Component } from 'react'
import Home from './Containers/Home/Home'
import {Route,Switch} from 'react-router-dom'
import E04 from './Containers/E04'
import Navbar from './Components/Home/Navbar/Navbar'
import Login from './Containers/Login/Login'
import Modal from './Containers/Modal/Modal'
import GetStarted from './Components/Home/Trial/GetStarted'
import Interested from './Components/Home/Interested/Interested'
import Courses from './Containers/Courses/Courses'
import Career from './Containers/Career/Career'
import Blogs from './Containers/Blogs/Blogs'
import Apply from './Containers/Career/Apply/Apply'
import Team from './Containers/Team/Team'

export default class App extends Component {
  state={
    authModalVisible: false,
    started:false,
    interest:false
  }

   openModal = () => {
    
    this.setState({authModalVisible: true})    

    }
  closeModal = () => {
    
    this.setState({authModalVisible: false})    

    }
    openModalStart = () => {
    
      this.setState({...this.state,started: true})    
  
      }
    closeModalStart = () => {
      
      this.setState({...this.state,started: false})    
  
      }
      openInterest = () => {
    
        this.setState({...this.state,interest: true})    
    
        }
      closeInterest = () => {
        
        this.setState({...this.state,interest: false})    
    
        }

  render() {
    return (
      <React.Fragment>
        <Navbar openModal={this.openModal} />
        <Modal visible={this.state.authModalVisible} closeModal={this.closeModal}>
          <Login modal={this.closeModal}/>
        </Modal>
        <Modal visible={this.state.started} closeModal={this.closeModalStart}>
          <GetStarted modal={this.closeModalStart}/>
        </Modal>  
        <Modal visible={this.state.interest} closeModal={this.closeInterest} >
          <Interested modal={this.closeInterest}  />
        </Modal>        
        <Switch>
        <Route path="/" exact>
         <Home modal={this.openModalStart} open={this.openInterest}/> 
         </Route>
         <Route path="/course">
         <Courses/> 
         </Route>
         <Route path="/blogs">
         <Blogs/> 
         </Route>
         <Route path="/apply/:post" component={Apply} />
         <Route path="/career">
         <Career/> 
         </Route>
         <Route path="/team">
         <Team/> 
         </Route>
        <Route component={E04}/>
        </Switch>
      </React.Fragment>
    )
  }
}
