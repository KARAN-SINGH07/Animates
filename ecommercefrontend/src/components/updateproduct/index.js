// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import './updateproduct.css';
import React, {useState,useEffect} from 'react';
// import {Button,Checkbox,Form} from 'Semantic-ui-react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';


function UpdateProduct() {
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
  const [data, setData] = useState({ id: "", productname: "", description: "",companyname: "", price: "",quantity: "",image: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/productlisting/updateproduct";
			const { data: res } = await axios.post(url, data);
			
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		} 
	};

  // let history=useNavigate();
  //   const[id,setId]=useState('');
  //   const[productname,setName]=useState('');
  //   const[description,setDescription]=useState('');
  //   const[price,setPrice]=useState('');
  //   const[quantity,setQuantity]=useState('');
  //   const[companyname,setCompany]=useState('');

  //   const postData=()=>{
  //     axios.post('http://localhost:4000/productlisting/updateproduct',{
  //         id,
  //         productname,
  //         description,
  //         price,
  //         quantity,
  //         companyname
  //     }).then(()=>{
  //         history.push('/read')
  //     })
  // }
  return (

    <body className="form-body">
   <div class="form-body mt-4">
      <div class="row">
      
          <div class="form-holder1">
              <div class="form-content1">
                  <div class="form-items">
                      <h3>Update Product</h3>
                      <p>Fill in the data below.</p>
                      <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                        
                        

                          <div class="col-md-12">
                             <input class="form-control" type="text" name="id" placeholder="Product Id" onChange={handleChange}
							value={data.id} required/>
                             <div class="valid-feedback">Product Id field is valid!</div>
                             <div class="invalid-feedback">Product Id field cannot be blank!</div>
                          </div>
                          <div class="col-md-12">
                             <input class="form-control" type="text" name="productname" placeholder="Product Name" onChange={handleChange}
							value={data.productname} required/>
                             <div class="valid-feedback">Product Name field is valid!</div>
                             <div class="invalid-feedback">Product Name field cannot be blank!</div>
                          </div>
                          <div class="col-md-12">
                             <input class="form-control" type="text" name="companyname" placeholder="Company Name" onChange={handleChange}
							value={data.companyname} required/>
                             <div class="valid-feedback">Company Name field is valid!</div>
                             <div class="invalid-feedback">Company Name field cannot be blank!</div>
                          </div>

                          <div class="mt-2 form-group">
                            <label for="exampleFormControlTextarea1">Description</label>
                            <textarea class="form-control" id="exampleFormControlTextarea1" name="description" rows="3"  onChange={handleChange}
							value={data.description} required></textarea>
                            <div class="valid-feedback">Description field is valid!</div>
                             <div class="invalid-feedback">Description field cannot be blank!</div>

                          </div>

                        <div class="col-md-12">
                            <input class="form-control" type="text" name="price" placeholder="Price"  onChange={handleChange}
							value={data.price} required/>
                             <div class="valid-feedback">Price field is valid!</div>
                             <div class="invalid-feedback">Price field cannot be blank!</div>
                         </div>


                         
                         <div class="col-md-12 mt-2">
                            <input class="form-control" type="number" min="1" name="quantity" placeholder="Quantity" onChange={handleChange}
							value={data.quantity} required/>
                             <div class="valid-feedback">Quantity field is valid!</div>
                             <div class="invalid-feedback">Quantity field cannot be blank!</div>
                         </div>
                         
              
                          <label class="form-label mt-2 mb-2" for="customFile">Add Image</label >
                            <input type="file" class="form-control" id="customFile" />
                          <div class="invalid-feedback">Image field cannot be blank!</div>
                        
                        
                        


                         

                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label">I confirm that all data are correct</label>
                       <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                      </div>
                
                      {error && <div className="error_msg">{error}</div>}
                          <div class="form-button mt-3">
                              <button id="submit" type="submit" class="btn btn-purple text-white">Update</button>
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

export default UpdateProduct;
