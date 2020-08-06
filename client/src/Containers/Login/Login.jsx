import React,{useState,useEffect} from 'react'
import './Login.scss'
import img from '../../images/logo.png'
import {NavLink} from 'react-router-dom'
import { Button } from '@material-ui/core';
import { connect } from "react-redux";
import * as actions from '../../store/actions'
import { useHistory, Redirect, withRouter } from 'react-router-dom';
import { Spinner } from 'react-bootstrap'

function Login(props) {
     
    const [user,setUser] = useState()
    const [regMode, setRegMode] = useState(false)
    const [email, setEmail] = useState('');
    const [id,setId] = useState(null)
    const [password, setPassword] = useState('')
    const [userDetails, setUserDetails] = useState({ name: '', mobile: '', password: '', confirmPassword: '', email: '' });
    const [loading, setLoading] = useState(false);
    const [signRes,setSignRes] = useState(false)
    const handleChangeEmail = e => {
        setEmail(e.target.value);
    }
    const handleChangePassword = e => {
        setPassword(e.target.value);
    }
    const handleChange = (e) => {
        const value = e.target.value
        setUserDetails({...userDetails, [e.target.name]: value })
    }
    const [match, setMatch] = useState(true);

    useEffect(() => {
        if (userDetails.password != userDetails.confirmPassword) {
            setMatch(false);
        }
        else {
            setMatch(true);
        }
    }, [userDetails.confirmPassword])


    const login = (e) => {
        e.preventDefault();
        props.login(email, password);
    }
    const changeMode = () => {
        setRegMode(!regMode);
        props.setResponse({ status: 0, message: '' })
    }

    const signUpAccount = (e)=>{
        e.preventDefault()
        let details = {name: userDetails.name, password: userDetails.password, mobile: userDetails.mobile, email: userDetails.email }
        fetch('/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(details)
        }).then(response => {
            response.json().then(res=>{
                console.log(res)
                setUser(res.user)
                props.setResponse({status:response.status,message:res.message})
                if(response.status===201){
                    setSignRes(true)
                }
            })
        })
    }

    const signUpForm = (
        <form className="signUp" onSubmit={signUpAccount}>
        <div className="log_head">
            <div className="login_zinedu">
                 <div className="log_img">
                     <img src={img} alt="pic"/>
                 </div>
                 <div className='heading_log'>
                      <h1>ZINEDU LIVE</h1>
                      <p to="/components/" className="mle">MAKING LEARNING EXCITING</p>
                 </div>  
            </div>
        </div>
        <div className="signUp_input">
            <div className="login_form">
                <div className="input5">
                     <h6>Name:</h6>
                     <input required type="text" placeholder="Ashish Gupta" value={userDetails.name} onChange={handleChange} name="name"/>
                </div>
                <div className="input5">
                     <h6>Mobile:</h6>
                     <input required type="text" placeholder="*******" value={userDetails.mobile} onChange={handleChange} name="mobile"/>
                </div>
                <div className="input5">
                     <h6>Password:</h6>
                     <input required type="password" placeholder="*******" value={userDetails.password} onChange={handleChange} name="password"/>
                </div>
                <div className="input5">
                     <h6>Confirm Password:</h6>
                     <input required type="password" placeholder="xyz@gmail.com" value={userDetails.confirmPassword} onChange={handleChange} name="confirmPassword"/>
                     {!match ? <div className="error">Passwords Don't Match</div> : null}
                </div>
                <div className="input5">
                     <h6>Email:</h6>
                     <input required type="email" placeholder="Aman123@" value={userDetails.email} onChange={handleChange} name="email" />
                </div>
                <div>
                    <NavLink to="/" onClick={props.modal}>Forgot Password ?</NavLink>
                </div>
                <Button variant="contained" type="submit" style={{width:'100%',marginTop:'2%',backgroundColor:'rgb(255,81,81'}}>Register</Button>
                {signRes ? <div className="error" style={{color:'green'}}>{props.response.message}</div> : null}
                {[400].includes(props.response.status) ? <div className="error">{props.response.message}</div> : null}
                <div className="registerd">
                    <p>
                        Registered ?
                    </p>
                    <Button color="primary" variant="contained" style={{width:'100%',marginTop:'2%'}} onClick={changeMode}>Login</Button>
                </div>
            </div>
        </div>
    </form>
    )
     
    const loginForm = (
        <div className="login">
        <div className="log_head">
            <div className="login_zinedu">
                 <div className="log_img">
                     <img src={img} alt="pic"/>
                 </div>
                 <div className='heading_log'>
                      <h1>ZINEDU LIVE</h1>
                      <p to="/components/" className="mle">MAKING LEARNING EXCITING</p>
                 </div>  
            </div>
        </div>
        <form className="login_input" onSubmit={login}>
            <div className="login_form">
                <div className="input5">
                     <h6>Your Email:</h6>
                     <input type="email" placeholder="mymail@gmail.com" onChange={handleChangeEmail} value={email}/>
                </div>
                <div className="input5">
                     <h6>Your Password:</h6>
                     <input type="password" placeholder="Aman123@" onChange={handleChangePassword} value={password}/>
                     {[404].includes(props.response.status) ? <div className="error">{props.response.message}</div> : null}

                </div>
                <div>
                    <NavLink to="/password" onClick={props.modal}>Forgot Password ?</NavLink>
                </div>
                <Button variant="contained" type="submit" style={{width:'100%',marginTop:'2%',backgroundColor:'rgb(255,81,81'}}>{!loading ? "Login" : <Spinner animation="border"/>}</Button>
                <div className="registerd">
                    <p>
                        Not Registerd yet ?
                    </p>
                    <Button color="primary" variant="contained" style={{width:'100%',marginTop:'2%'}} onClick={changeMode}>Register</Button>
                </div>
            </div>
        </form>
    </div>
    )

    return (
            <React.Fragment>
                {regMode ? signUpForm : loginForm}
            </React.Fragment>
    )
}

const mapStateToProps = state => {
    return {
        ...state
    }
}

const mapDispatchTooProps = dispatch => {
    return {
        login: (email, password) => dispatch(actions.login(email, password)),
        setResponse: (response) => dispatch({ type: actions.SET_RESPONSE, response })
    }
}

export default connect(mapStateToProps, mapDispatchTooProps)((withRouter(Login)));