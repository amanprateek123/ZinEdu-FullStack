import React,{useState} from 'react'
import './Interested.scss'
import {Button} from '@material-ui/core'
import { Formik, Field, Form } from 'formik';
import { useQuery,useMutation } from "react-query";
import { connect } from "react-redux";
import * as actions from '../../../store/actions'


function Detail(props) {
        
      const detail = (variable)=>{
          return fetch("/interest",{
            headers: {
                'Authorization': 'Bearer ' + props.idToken,
                'Content-Type': 'application/json'
            },
            method:'POST',
            body:JSON.stringify(variable.variables)
         }).then(res=>res.json()).then(res=>{
             console.log(res)
             props.setResp(res)
         })
      }

      const [post,meta] = useMutation(detail)
    return (
            <Formik
               initialValues={{
                name:'',
                phone:'',
                location:'Delhi'
              }}
              onSubmit={async values => {
                await post({variables:values})
                props.setModal(3)
              }}
              >
<Form className="int_detail">
            <div className="int_up1">
                <div className="int_value">
                    <div className="int_input">
                        <h1>Name</h1>
                        <Field required type="text" placeholder="Smith John" name="name" />
                    </div>
                    <div className="int_input">
                        <h1>Phone No.</h1>
                        <Field required type="text" placeholder="+91" name="phone" />
                    </div>
                    <div className="int_input">
                        <h1>Location</h1>
                        <Field as="select" name="location">
                            <option>Delhi</option>
                            <option>Bihar</option>
                            <option>Lucknow</option>
                            <option>Varanasi</option>
                            <option>Hyderabad</option>
                            <option>Kolkata</option>
                        </Field>
                    </div>
                </div>
            </div>
            <div className="int_down">
              <Button variant="contained" type="submit" style={{backgroundColor:'rgb(255,81,81)',width:'30%',marginTop:"4%",marginLeft:'35%'}}>
                  Submit
              </Button>
              </div>
        </Form>
</Formik>
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
  
  export default connect(mapStateToProps, mapDispatchTooProps)(Detail);