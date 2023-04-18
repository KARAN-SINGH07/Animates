import React, {useState,useEffect} from 'react';
import axios from 'axios';
import './singleproduct.css'
import { useParams } from 'react-router-dom';


function SingleProduct() {
  const [product, setProduct] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchProduct = async () => {
        
        const { data } = await axios.get(`http://localhost:4000/productlisting/product/${id}`); 
        console.log(data);     
      setProduct(data); 
     
    };
    fetchProduct();
  }, [id]);

  return (
    <div className="form-body">
      <div className="row">
        <div className="form-holder1">
          <h1 className="color">{product.productname}</h1>
          <img  src={`http://localhost:4000/${product.image}`} className="img-fluid" alt={product.productname} />


          <p>{product.description}</p>
          <p>{product.companyname}</p>
          <p>{product.price}</p>
          <p>{product.quantity}</p>
        </div>
      </div>
    </div>
  );
}

export default SingleProduct;
