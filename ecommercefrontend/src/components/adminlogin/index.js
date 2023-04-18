// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
import React, {useState} from 'react';
import { Link } from "react-router-dom";
import './adminlogin.css'


import './adminlogin.css';


function AdminLogin({children}) {
//   let history=useNavigate();
//     const[email,setemail]=useState('');
//     const[password,setpassword]=useState('');

//     const postData=()=>{
//       axios.post('http://localhost:4000/users/login',{
//           email,
//           password
//       }).then(()=>{
//           history.push('/read')
//       })
//   }
// React state to manage visibility


const navigate=useNavigate();
const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/admin/login";
			const { data: res } = await axios.post(url, data);
			localStorage.setItem("admintoken", res.data);
            // console.log(res.data)
			// window.location = "/";
            navigate('/home')
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
  return (

    <body className="form-body">
   <div class="form-body">
      <div class="row">
          <div class="form-holder1">
              <div class="form-content1">
                  <div class="form-items">
                      <h3>Login as Admin</h3>
                      <p>Fill in the data below.</p>
                      <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                        
                        
                      <div class="col-md-12 mt-4">
                            <input class="form-control" type="text" name="email" placeholder="E-Mail" onChange={handleChange}
							value={data.email} required/>
                             <div class="valid-feedback">E-mail field is valid!</div>
                             <div class="invalid-feedback">E-mail field cannot be blank!</div>
                         </div>
                        <div class="col-md-12 mt-4">
                            <input class="form-control" type="text" name="password" placeholder="Password" onChange={handleChange}
							value={data.password} required/>
                             <div class="valid-feedback">Password field is valid!</div>
                             <div class="invalid-feedback">Password field cannot be blank!</div>
                         </div>
                          

                      <div class="form-check mt-4">
                        <input class="form-check-input" type="checkbox" value="" id="invalidCheck" required/>
                        <label class="form-check-label">I confirm that all data are correct</label>
                       <div class="invalid-feedback">Please confirm that the entered data are all correct!</div>
                      </div>
                
                      {error && <div className="error_msg">{error}</div>}
                          <div class="form-button mt-3">
                              <button id="submit" type="submit" class="btn btn-purple text-white">Login</button>
                          </div>
                          <div className="right">
					<p className="text-white mt-4">Are you a User?<Link ClassName="mar-lef" to="/login">Login Here!</Link></p>
				</div>
                      </form>
                      
                  </div>
              </div>
          </div>
      </div>
  </div>
  

  <script src="./login.js"></script>
</body>
  );

}

export default AdminLogin;

