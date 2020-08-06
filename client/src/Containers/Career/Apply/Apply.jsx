import React from 'react'
import './Apply.scss'
import {Button} from '@material-ui/core'

export default function Apply_1() {
   
   const [page,setPage] = React.useState(1)

   const changePage = ()=>{
     setPage(2)
   }


   const nextPage = (
    <div className="applys">
      <div className="apply_form">
       <div className="apply_head">
          <h1> application for the post of maths faculty, noida</h1>
       </div> 
       <div className="frm">
          <h1>Application Questions</h1>
          <div className="name_ap">
          <div className="ren">
            <p>Question 1</p>
            <textarea type="text "rows="2" cols="4" onkeyup="Allow()" placeholder="Write your Answer......"></textarea>
          </div>                     
           </div>
           <div className="name_ap">
          <div className="ren">
            <p>Question 2</p>
            <textarea type="text "rows="2" cols="4" onkeyup="Allow()" placeholder="Write your Answer......"></textarea>
          </div>                     
           </div>
           <div className="name_ap">
          <div className="ren">
            <p>Question 3</p>
            <textarea type="text "rows="2" cols="4" onkeyup="Allow()" placeholder="Write your Answer......"></textarea>
          </div>                     
           </div>
           <div className="re bt_rem">
                       <Button color="secondary" onClick={changePage}>
                         Submit
                       </Button> 
                       </div> 
       </div>   
      </div>
    </div>
   )


return (
        page===1?(
            <div className="applys">
            <div className="apply_form">
               <div className="apply_head">
                  <h1> application for the post of maths faculty, noida</h1>
                </div> 
                <div className="frm">
                   <h1>Personal Details</h1>
                   <div className="name_ap">
                     <div className="re">
                        <p>Name</p>
                        <input type="text" />
                     </div>
                     <div className="re">
                     <p>dob</p>
                     <input type="text" />
                     </div>
                   </div>
                   <div className="name_ap">
                     <div className="re">
                        <p>Phone Number</p>
                        <input type="text" />
                     </div>
                     <div className="re">
                     <p>email id</p>
                     <input type="text" />
                     </div>
                   </div>
                   <div className="name_ap">
                     <div className="re">
                        <p>Phone Number</p>
                        <select>
                           <option>Male</option>
                           <option>Female</option>
                           <option>Transgender</option>
                        </select>
                     </div>
                   </div>
                   <div className="name_ap">
                    <div className="re">
                        <p>Educational background</p>
                      <textarea rows="3" cols="30">

                      </textarea>
                    </div>
                    <div className="re">
                        <p>professional details</p>
                    <textarea rows="3" cols="30">
                        </textarea>
                    </div>
                   </div>
                   <div>
                       <div className="re bt_re">
                       <Button color="secondary">
                         Save
                       </Button>
                       <span>
                       <Button color="secondary" onClick={changePage}>
                         Next Page
                       </Button> 
                       </span>
                       </div>
                   </div>
                </div>     
            </div>
        </div>):(nextPage)
    )
}
