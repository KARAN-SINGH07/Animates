// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
// import './updateproduct.css';
import React, {useState,useEffect} from 'react';
// import {Button,Checkbox,Form} from 'Semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function DeleteProduct() {
    
  let history=useNavigate();
   const[id,setId]=useState('');
  const navigate=useNavigate();
  const user=localStorage.getItem('token');
  const admin=localStorage.getItem('admintoken');


   useEffect(()=>{
	
    if(user){
        navigate('/adminlogin')
      
    }
    if(!admin){
        navigate('/adminlogin')
      }
  },[])
    

    const postData=()=>{
      axios.post('http://localhost:4000/productlisting/deleteproduct',{
          id
      }).then(()=>{
          history.push('/read')
      })
      toast.success("Product Deleted successfully");
  }
  return (

    <body className="form-body">
        <ToastContainer/>
   <div class="form-body mt-4">
      <div class="row">
          <div class="form-holder1">
              <div class="form-content1">
                  <div class="form-items">
                      <h3>Delete Product</h3>
                      <p className="mt-3">Fill in the data below.</p>
                      <form class="requires-validation" novalidate>
                    
                    <div class="col-md-12">
                             <input class="form-control" type="text" name="id" placeholder="Product Id" onChange={(e)=>setId(e.target.value)}required/>
                             <div class="valid-feedback">Product Id field is valid!</div>
                             <div class="invalid-feedback">Product Id field cannot be blank!</div>
                    </div>
                          
                    <div class="form-check mt-2">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label">I confirm that all data are correct</label>
                       <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                      </div>
                

                          <div class="form-button mt-3">
                              <button onClick={postData} id="submit" type="submit" class="btn btn-purple text-white">Delete</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  

  <script src="./updateproduct.js"></script>
</body>
  );
}

export default DeleteProduct;
