// import logo from './logo.svg';
// import image1 from './img/registration.jpg'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import './products.css';
import Product from "../products2/index";
// import img from './imag/naruto.jpg'
let arr;
const url="http://localhost:4000/productlisting/getproduct";
function Products() {
	const navigate = useNavigate();
	useEffect(() => {
		if (!localStorage.getItem('token') && !localStorage.getItem('admintoken')) {
		
		
			navigate('/login')
		}
	}, [])
	const initialState={
		isSingleLoading : false,
		singleProduct: {}
	}

	// const [APIData, setAPIData] = useState([]);
	const [productData, setproductData] = useState([]);

	
	useEffect(() => {
		axios.get('http://localhost:4000/productlisting/getproduct')
			.then((response) => {
				
				// console(response.data);	
				setproductData(response.data);
				
			})
	}, []);
	const getsingleproduct = async(url)=>{
		try {
			const res= await axios.get(url);
			const singleProduct=await res.data;
		} catch (error) {
			
		}
	};
	return (
		// console.log(APIData),
		<body className='bodyy'>
			<div className="margin-top2 container-xl">
				<div className="row">
					<div className="col-md-12">
						<h2 className='h22'>Featured <b>Products</b></h2>
						<div id="myCarousel" className="carousel slide" data-ride="carousel" data-interval="0">
							

							<div className="carousel-inner">
								<div className="item carousel-item active">
									
									 
									<div className="row">
									{productData.map((data)=>{
							return(<Product  productname={data.productname} price={data.price} description={data.description} image={data.image} id={data._id}/>)})}
						
																	
										
									
									</div>
									
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			 
		</body>
	);
}

export default Products;