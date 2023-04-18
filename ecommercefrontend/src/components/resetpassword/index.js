// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import React, {useRef, useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NewPassword from './newpassword';
import '../login/login';
// toast.configure() 
// import { Link } from "react-router-dom";



// import { Toast } from 'bootstrap';


function ResetPassword() {
    const emailRef=useRef();
    const [otpForm,showForm]=useState(true);
    const sendOtp=async()=>{
        try{
            let url='http://localhost:4000/otpsend/send';
            let options={
                method:'POST',
                url: url,
                data:{email:emailRef.current.value}
            }
            let response=await axios(options)
            let record=response.data;
            if(record.statusText==='Success'){
                toast.success(record.message);
                showForm(false); 
            }
            else{
                toast.error(record.message);
                
            }
        }catch(e){
            toast.error("something went wrong");
        }
    }
    const changepassword=async()=>{
        try{
            let url='http://localhost:4000/otpsend/changepassword';
            let options={
                method:'POST',
                url: url,
                data:{email:emailRef.current.value}
            }
            let response=await axios(options)
            let record=response.data;
            if(record.statusText==='Success'){
                toast.success(record.message);
                showForm(false); 
            }
            else{
                toast.error(record.message);
                
            }
        }catch(e){
            toast.error("something went wrong");
        }
    }
    
  return (

    <body className="form-body">
   <div className="form-body">
      <div className="row">
          <div className="form-holder1">
              <div className="form-content1">
                  <div className="form-items">
                      <h3>ResetPassword</h3>
                      
                      <ToastContainer/>
    
                 { otpForm ?    <form className="requires-validation" novalidate >
                        
                 <p>Please Enter your registered Email id.</p>
                      <div className="col-md-12 mt-4">
                            <input className="form-control" type="text" name="email" placeholder="E-Mail"
                             ref={emailRef} required/>
                             <div className="valid-feedback">E-mail field is valid!</div>
                             <div className="invalid-feedback">E-mail field cannot be blank!</div>
                         </div>
                        
                          

                      <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required autoComplete='on'/>
                        <label className="form-check-label">I confirm that all data are correct</label>
                       <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                      </div>
                      

                        <div className="form-button mt-3">
                    <Link className="nav-link" to=""><button onClick={sendOtp} id="submit" type="submit" className="btn btn-purple text-white">Send OTP</button></Link>
                          </div>
                      </form>
                      :
                      <NewPassword email={emailRef.current.value}/>
                    }
                    </div>
              </div>
          </div>
      </div>
  </div>
  

  <script src="./reset.js"></script>
</body>
  );
}

export default ResetPassword;
