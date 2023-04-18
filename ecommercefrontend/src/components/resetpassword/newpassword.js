// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import axios from 'axios';
import {useNavigate,Link, Navigate} from 'react-router-dom';
import React, {useRef, useState} from 'react';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './reset.css'
// toast.configure() 
// import { Link } from "react-router-dom";



// import { Toast } from 'bootstrap';


function NewPassword(props) {
    const emailRef=useRef(); 
   const navigate=useNavigate();
   const [inputField,setInputField]=useState({
    otpcode:'',
    password:'',
    cpassword:''
   })

   const history=useNavigate()
   const[errField,setErrField]=useState({
    otpcodeErr:'',
    passwordErr:'',
    cpasswordErr:''
   })

   const validForm=()=>{
    let formIsValid=true;
    setErrField({
    otpcodeErr:'',
    passwordErr:'',
    cpasswordErr:''
    })

    if(inputField.otpcode==''){
        formIsValid=false;
        setErrField(prevState=>({
            ...prevState,otpcodeErr:'Please Enter Email'
        }))
    }
    if(inputField.password==''){
        formIsValid=false;
        setErrField(prevState=>({
            ...prevState,passwordErr:'Please Enter Password'
        }))
    }
    if(inputField.cpassword==''){
        formIsValid=false;
        setErrField(prevState=>({
            ...prevState,cpasswordErr:'Please Enter Confirmed Password'
        }))
    }
    if(inputField.cpassword !='' && inputField.password!=inputField.cpassword){
        formIsValid=false
        setErrField(prevState=>({
            ...prevState,cpasswordErr:'Passwords are not Matched'
        }))
    }
    return formIsValid;

   }

 const inputHandler=(e)=>{
    setInputField({ ...inputField,[e.target.name]:e.target.value})
 }

    
    const changePassword =async()=>{
        if (validForm()){
            Object.assign(inputField,props)
                let url='http://localhost:4000/otpsend/changepassword';
                let options={
                    method:'POST',
                    url: url,
                    data:inputField
                }
            try{
                let response=await axios(options)
                console.log(response)
                let record=response.data;
                if(record.statusText==='Success'){
                    toast.success(record.message);
                    //  navigate('/login')
                }
                else{
                    toast.error(record.message);
                    
                }
            }catch(e){
                toast.error("Something went Wrong!");
            }
        }
        else{
            toast.error("Form Invalid"); 
        }
        
    }
    
   
    
  return (

    <body className="form-body">
   
                      <ToastContainer/>
    
               <form className="requires-validation" novalidate >
                        
                 <p>Please Enter your Otp and new password.</p>
                      <div className="col-md-12 mt-4">
                            <input className="form-control" type="text" name="otpcode" maxLength="4" placeholder="Enter OTP Code" value={inputField.otpcode} onChange={inputHandler} required/>
                            {
                                errField.otpcodeErr.length > 0 && <span className="error_msg">{errField.otpcodeErr}</span>
                            }
                             <div className="valid-feedback">Field is valid!</div>
                             <div className="invalid-feedback">Field cannot be blank!</div>
                         </div>
                      <div className="col-md-12 mt-4">
                            <input className="form-control" type="text" value={inputField.password}   name="password" placeholder="New Password" onChange={inputHandler} required/>
                            {
                                errField.passwordErr.length > 0 && <span className="error_msg">{errField.passwordErr}</span>
                            }
                             <div className="valid-feedback">Field is valid!</div>
                             <div className="invalid-feedback">Field cannot be blank!</div>
                         </div>
                      <div className="col-md-12 mt-4">
                            <input className="form-control" type="text" value={inputField.cpassword}   name="cpassword" placeholder="Confirm New Password" onChange={inputHandler} required/>
                            {
                                errField.cpasswordErr.length > 0 && <span className="error_msg">{errField.cpasswordErr}</span>
                            }
                             <div className="valid-feedback">Field is valid!</div>
                             <div className="invalid-feedback">Field cannot be blank!</div>
                         </div>
                      {/* <div className="col-md-12 mt-4">
                            <input className="form-control" type="text" name="cpassword" placeholder="Confirm Password" required/>
                             <div className="valid-feedback">Field is valid!</div>
                             <div className="invalid-feedback">Field cannot be blank!</div>
                         </div> */}
                        
                          

                      <div className="form-check mt-4">
                        <input className="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label className="form-check-label">I confirm that all data are correct</label>
                       <div className="invalid-feedback">Please confirm that the entered data are all correct!</div>
                      </div>
                      

                        <div className="form-button mt-3">
                    <Link className="nav-link" to=""><button onClick={changePassword} id="submit" type="submit" name='submit' className="btn btn-purple text-white">Change Password</button></Link>
                          </div>
                      </form>
                      
                    
          
      
  

  <script src="./reset.js"></script>
</body>
  );
}

export default NewPassword;
