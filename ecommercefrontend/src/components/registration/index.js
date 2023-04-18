// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import React, {useState,useEffect} from 'react';
import axios from 'axios';
import {useNavigate,Link} from 'react-router-dom';
import {ToastContainer,toast} from 'react-toastify';
import './registration.css';


function Registration() {
    const navigate1=useNavigate();
    // const navigate2=useNavigate();
    useEffect(()=>{
      
      if(localStorage.getItem('token')|| localStorage.getItem('admintoken')){
        navigate1('/home')
      }
    },[])
    // let history=useNavigate();
    // const[name,setname]=useState('');
    // const[email,setemail]=useState('');
    // const[phone,setphone]=useState('');
    // const[password,setpassword]=useState('');
    // const [error, setError] = useState("");
    
    // //const [checkbox,setCheckbox]=useState(false);
    // //console.log(checkbox)
    // const postData=()=>{
    //     axios.post('http://localhost:4000/users/register',{
    //         name,
    //         email,
    //         phone,
    //         password
    //     }).then((history)=>{
    //         console.log(history.data)
    //         history.push('/read')
    //     })
    // }
    const [data, setData] = useState({
		name: "",
		email: "",
		phone: "",
		password: "",
	});
	const [error, setError] = useState("");
	const navigate = useNavigate();

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = "http://localhost:4000/users/register";
			const { data: res } = await axios.post(url, data);
			navigate("/login");
			console.log(res.message);
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
                      <ToastContainer/>

   <div class="form-body">
      <div class="row">
          <div class="form-holder">
              <div class="form-content">
                  <div class="form-items">
                      <h3>Register Now</h3>
                      <p>Fill in the data below.</p>
                      <form class="requires-validation" novalidate onSubmit={handleSubmit}>
                        
                        

                          <div class="col-md-12">
                             <input class="form-control" type="text" name="name" placeholder="Your Name"onChange={handleChange}
							value={data.name} required/>
                             <div class="valid-feedback">Name field is valid!</div>
                             <div class="invalid-feedback">Name field cannot be blank!</div>
                          </div>
                          <div class="col-md-12 mt-4">
                             <input class="form-control" type="number" name="phone" placeholder="Phone Number" onChange={handleChange}
							value={data.phone} required/>
                             <div class="valid-feedback">Phone Number field is valid!</div>
                             <div class="invalid-feedback">Phone Number field cannot be blank!</div>
                          </div>

                          

                        <div class="col-md-12 mt-4">
                            <input class="form-control" type="email" name="email" placeholder="E-Mail" onChange={handleChange}
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
                              <button id="submit" type="submit" class=" btn btn-purple text-white btn-primary ">Register</button>
                          </div>

                          <p className="mt-4">Are you already registered.<Link className="mar-lef" to="/login">Login</Link></p>
                      </form>
                  </div>
              </div>
          </div>
      </div>
  </div>
  

  <script src="./registration.js"></script>
</body>
  );
}

export default Registration;
