import './css/styles.css';
import './header.css';
import { useEffect } from 'react';

// import './header.scss';
import { Outlet, Link,useNavigate, Navigate } from "react-router-dom";


function Header() {
	const navigate = useNavigate();
	const user = localStorage.getItem("token");
	const admin = localStorage.getItem("admintoken");
  
  const handleLogout = () => {
		localStorage.removeItem("token");
		navigate('/login')
	};
  const adminhandleLogout = () => {
		localStorage.removeItem("admintoken");
		navigate('/login')
	};
  // if(window.location.pathname==='/login'){
  //   return null;
  // }
  
	  if(user){
		  return(
<body id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand text-danger" to="/home"><p className='text-danger'>Ani<font className='text-success'>Mates</font></p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            
            <div className="collapse navbar-collapse justify-content-center" id="navbarResponsive">
              <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                {/* <li className="nav-item"><Link className="nav-link" to="home">Home</Link></li> */}  
                <li className="nav-item"><Link className="nav-link" to="products">Products</Link></li>
  
                {/* <li className="nav-item dropdown">
                  <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Changes
                  </Link>
                  <ul className="dropdown-menu">
                    <li><Link className="dropdown-item" to="addproduct">Add Product</Link></li>
                    <li><Link className="dropdown-item" to="updateproduct">Update Product</Link></li>
                    <li><Link className="dropdown-item" to="deleteproduct">Delete Product</Link></li>
                    <li><hr className="dropdown-divider" /></li>
                    <li><Link className="dropdown-item" to="listproduct">List Product</Link></li>
                    
                  </ul>
                </li> */}
                <li className="nav-item"><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
                
                {/* <li className="nav-item"><Link className="nav-link" to="addproduct">Addproduct</Link></li>
                <li className="nav-item"><Link className="nav-link" to="updateproduct">Update</Link></li>
                <li className="nav-item"><Link className="nav-link" to="listproduct">List</Link></li> */}
                <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
                <li className="nav-item right-cta-menu text-right d-flex
                          aligin-items-center col-4 mr-0">
                   <Link className="nav-link" to="/registration"><button className="btn btn-purple border-width-2 d-lg-inline-block text-white button btn-raised shadow my-button w-xs">Register</button></Link>
                   
                   {/* <Link className="nav-link" to="/login"><button className="btn btn-purple border-width-2 d-lg-inline-block text-white  btn-raised shadow my-button w-xs">Log In</button></Link> */}
                   <Link className="nav-link" to=""><button className="btn btn-purple border-width-2 d-lg-inline-block text-white  btn-raised shadow my-button w-xs" onClick={handleLogout}>Logout</button></Link>
                </li>
                {/* <li>
                   <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fas fa-user-alt"></i></a>
                </li> */}
                
          <li className="nav-item dropdown">
          <a className="nav-link dropdown-toggle" href="userdetails" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"/>
          </a>
          <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
            <Link className="dropdown-item" to="userdetails">Dashboard</Link>
            <Link className="dropdown-item" to="#">Edit Profile</Link>
            <Link className="dropdown-item" to="#">Log Out</Link>
          </div>
        </li>   
      
  
              </ul>
            </div>
            {/* <div className="right-cta-menu text-right d-flex
                          aligin-items-center justify-content-end col-6">
                      <div className="ml-auto">
                          
                          
                      </div>
                      <a href="#" className="site-menu-toggle js-menu-toggle
                              d-inline-block d-xl-none mt-lg-2 ml-3"><span
                                  className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                  </div> */}
          </div>
        </nav>
        
        
      </body>
      )
	  }
	


  if(window.location.pathname==='/'){
    return (
      <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand text-danger" to="/home"><p className='text-danger'>Ani<font className='text-success'>Mates</font></p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            
            
            {/* <div className="right-cta-menu text-right d-flex
                          aligin-items-center justify-content-end col-6">
                      <div className="ml-auto">
                          
                          
                      </div>
                      <a href="#" className="site-menu-toggle js-menu-toggle
                              d-inline-block d-xl-none mt-lg-2 ml-3"><span
                                  className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                  </div> */}
          </div>
        </nav>
        
        
      </body>
    );
  }
	 

  if(window.location.pathname=='/login'){
    return (
      <body id="page-top">
        {/* <!-- Navigation--> */}
        <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
          <div className="container">
            <Link className="navbar-brand text-danger" to="/home"><p className='text-danger'>Ani<font className='text-success'>Mates</font></p></Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              Menu
              <i className="fas fa-bars ms-1"></i>
            </button>
            
            
            {/* <div className="right-cta-menu text-right d-flex
                          aligin-items-center justify-content-end col-6">
                      <div className="ml-auto">
                          
                          
                      </div>
                      <a href="#" className="site-menu-toggle js-menu-toggle
                              d-inline-block d-xl-none mt-lg-2 ml-3"><span
                                  className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                  </div> */}
          </div>
        </nav>
        
        
      </body>
    );
  }
  if(admin){
  return(
    <body id="page-top">
            {/* <!-- Navigation--> */}
            <nav className="navbar navbar-expand-lg navbar-dark fixed-top" id="mainNav">
              <div className="container">
                <Link className="navbar-brand text-danger" to="/home"><p className='text-danger'>Ani<font className='text-success'>Mates</font></p></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
                  Menu
                  <i className="fas fa-bars ms-1"></i>
                </button>
                
                <div className="collapse navbar-collapse justify-content-center" id="navbarResponsive">
                  <ul className="navbar-nav text-uppercase ms-auto py-4 py-lg-0">
                    {/* <li className="nav-item"><Link className="nav-link" to="home">Home</Link></li> */}  
                    <li className="nav-item"><Link className="nav-link" to="products">Products</Link></li>
      
                    <li className="nav-item dropdown">
                      <Link className="nav-link dropdown-toggle " to="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        Changes
                      </Link>
                      <ul className="dropdown-menu">
                        <li><Link className="dropdown-item" to="addproduct">Add Product</Link></li>
                        <li><Link className="dropdown-item" to="updateproduct">Update Product</Link></li>
                        <li><Link className="dropdown-item" to="deleteproduct">Delete Product</Link></li>
                        <li><hr className="dropdown-divider" /></li>
                        <li><Link className="dropdown-item" to="listproduct">List Product</Link></li>
                        
                      </ul>
                    </li>
                    <li className="nav-item"><Link className="nav-link" to="#portfolio">Portfolio</Link></li>
                    
                    {/* <li className="nav-item"><Link className="nav-link" to="addproduct">Addproduct</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="updateproduct">Update</Link></li>
                    <li className="nav-item"><Link className="nav-link" to="listproduct">List</Link></li> */}
                    <li className="nav-item"><Link className="nav-link" to="contact">Contact</Link></li>
                    <li className="nav-item right-cta-menu text-right d-flex
                              aligin-items-center col-4 mr-0">
                       <Link className="nav-link" to="/registration"><button className="btn btn-purple border-width-2 d-lg-inline-block text-white button btn-raised shadow my-button w-xs">Register</button></Link>
                       
                       {/* <Link className="nav-link" to="/login"><button className="btn btn-purple border-width-2 d-lg-inline-block text-white  btn-raised shadow my-button w-xs">Log In</button></Link> */}
                       <Link className="nav-link" to=""><button className="btn btn-purple border-width-2 d-lg-inline-block text-white  btn-raised shadow my-button w-xs" onClick={adminhandleLogout}>Logout</button></Link>
                    </li>
                    {/* <li>
                       <a className="btn btn-dark btn-social mx-2" href="#!" aria-label="LinkedIn"><i className="fas fa-user-alt"></i></a>
                    </li> */}
                    
              <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="userdetails" id="navbarDropdownMenuLink" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <img src="https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/fox.jpg" width="40" height="40" className="rounded-circle"/>
              </a>
              <div className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                <Link className="dropdown-item" to="userdetails">Dashboard</Link>
                <Link className="dropdown-item" to="#">Edit Profile</Link>
                <Link className="dropdown-item" to="#">Log Out</Link>
              </div>
            </li>   
          
      
                  </ul>
                </div>
                {/* <div className="right-cta-menu text-right d-flex
                              aligin-items-center justify-content-end col-6">
                          <div className="ml-auto">
                              
                              
                          </div>
                          <a href="#" className="site-menu-toggle js-menu-toggle
                                  d-inline-block d-xl-none mt-lg-2 ml-3"><span
                                      className="icon-menu h3 m-0 p-0 mt-2"></span></a>
                      </div> */}
              </div>
            </nav>
            
            
          </body>
          )
                    }
  
  
   }
   
  


export default Header;
