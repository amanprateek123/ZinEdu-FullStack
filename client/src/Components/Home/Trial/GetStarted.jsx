import React,{useState} from 'react'
import './Get.scss';
import {Button} from '@material-ui/core'
import ThankYou from './ThankYou';
import { Formik, Field, Form } from 'formik';
import { useQuery,useMutation } from "react-query";
import { connect } from "react-redux";
import * as actions from '../../../store/actions'

function GetStarted (props) {
       
const [display,setDisplay] = useState(1)
const [result,setResult] = useState(null)

const freeTrial = (variable)=>{
    return fetch("/free-trial",{
     headers: {
       'Authorization': 'Bearer ' + props.idToken,
       'Content-Type': 'application/json'
       },
       method:'POST',
       body:JSON.stringify(variable.variables)
       }).then(res=>res.json()).then(res=>{
       setResult(res)
       })
         }

const [postDetails,meta] = useMutation(freeTrial)

const detailHandler = (e)=>{
 e.preventDefault()
 setDisplay(2)
        }


 const detail = (
            <div className="getStarted">
            <h1>Enter your details:</h1>
            <div className="select_get">
                <div className="grade">
                    <h3>Name</h3>
                   <Field type="text" name="name" placeholder="Your Name"/>
                </div>
                <div className="goal">
                    <h3>Phone No.</h3>
                    <Field type="text" name="phone" placeholder="+91"/>
                </div>
            </div>
            <div className="btn_next">
              <Button color="primary" variant="contained" type="submit" >Submit</Button>
            </div>
        </div>
        )
        
        return (
         <React.Fragment>
               <Formik
               initialValues={{
                grade:'9',
                stream:'IIT/JEE',
                name:'',
                phone:''
              }}
              onSubmit={async values => {                  
                setDisplay(3)
                await postDetails({variables:values})
              }}
               >
              {({isSubmitting}) => (
                  <Form style={{width:'100%',display:'flex',justifyContent:'center'}}>
                       {(display===1)?(
                       <div className="getStarted">
                       <h1>Lets get started</h1>
                       <div className="select_get">
                           <div className="grade">
                               <h3>Grade</h3>
                               <Field as="select" name="grade">
                                   <option value = "9">9th Grade</option>
                                   <option value = "10">10th Grade</option>
                                   <option value = "11">11th Grade</option>
                                   <option value = "12">12th Grade</option>
                               </Field>
                           </div>
                           <div className="goal">
                               <h3>Goal</h3>
                               <Field as="select" name="stream">
                                   <option value="IIT/JEE">IIT/JEE</option>
                                   <option value="NEET/AIMS">NEET/AIMS</option>
                               </Field>
                           </div>
                       </div>
                       <div className="btn_next">
                         <Button color="primary" variant="contained" onClick={detailHandler}>Next</Button>
                       </div>
                   </div>
               ):(display===2)?detail:
               (display===3)?(<ThankYou res={result}/>):null
    }
                  </Form>
              )}
               </Formik>
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
        setResponse: (response) => dispatch({ type: actions.SET_RESPONSE, response })
    }
  }
  
  export default connect(mapStateToProps, mapDispatchTooProps)(GetStarted);