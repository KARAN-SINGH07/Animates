import React from 'react';
import ReactDOM from 'react-dom/client';


import './index.css';
import App from './App';
// import '../node_modules/public/css/styles.css'
import Header from './components/header/index'
import reportWebVitals from './reportWebVitals';
import '../node_modules/jquery/dist/jquery.min.js'
import '../node_modules/bootstrap/dist/js/bootstrap.min.js'
import Login from './components/login/index'
import AdminLogin from './components/adminlogin/index'
import Home from './components/home/index'
import Registration from './components/registration/index'
import AddProduct from './components/addproduct/index'
import UpdateProduct from './components/updateproduct/index'
import DeleteProduct from './components/deleteproduct/index'
import ListProduct from './components/listproduct/index';
import UserDetails from './components/userdetails/index';
import Products from './components/products/index';
import Contact from './components/contact/index';
import ResetPassword from './components/resetpassword/index';
import SingleProduct from './components/singleproduct/index';


// import MainContent from './components/mainContent'
// import Popper from 'popper.js';
// import $ from 'jquery';
import { BrowserRouter as Router , Routes, Route, Navigate, Path } from "react-router-dom";
// import  product_card from '../data/product_data';

const root = ReactDOM.createRoot(document.getElementById('root'));
// function hh(){
// 	const user = localStorage.getItem("token");
//   return user;
// }
root.render(
  
  // <React.StrictMode>
  //   <Header/>
  //   <App />
  // </React.StrictMode>
  <Router>
<Header/>
   

<Routes>

<Route path="/home" exact element={<Home/>} />
<Route path="/login" element={<Login/>} />
<Route path="/adminlogin" element={<AdminLogin/>} />

{/* <Route path="/registration" element={</>} /> */}
<Route path="/" element={<Registration/>} />
<Route path="/addproduct" element={<AddProduct/>} />
<Route path="/updateproduct" element={<UpdateProduct/>} />
<Route path="/deleteproduct" element={<DeleteProduct/>} />
<Route path="listproduct" element={<ListProduct/>} />
<Route path="userdetails" element={<UserDetails/>} />
<Route path="products" element={<Products/>} />
<Route path="contact" element={<Contact/>} />
<Route path="resetpassword" element={<ResetPassword/>} />
<Route path="/singleproduct/:id" element={<SingleProduct/>} />

{/* <Route path="/main" element={<MainContent/>} /> */}
{/* <Route path="/home" element={<Home/>} /> */}

</Routes>
</Router>

);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
