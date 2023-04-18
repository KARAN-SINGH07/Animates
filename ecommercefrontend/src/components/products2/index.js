import React from "react";
import { Link } from "react-router-dom";

function Product(props) {
    return (
        <div className="col-sm-3 mt-2">
            <div className="thumb-wrapper">
                <span className="wish-icon"><i className="fa fa-heart-o"></i></span>
                <div className="img-box">
                <Link to={`/singleproduct/${props.id}`}><img src={`http://localhost:4000${props.image}`} className="img-fluid" alt={props.image} /></Link>

                </div>
                <div className="thumb-content">
                    <h4>{props.productname}</h4>
                    <div className="star-rating">
                        <ul className="list-inline">
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star"></i></li>
                            <li className="list-inline-item"><i className="fa fa-star-o"></i></li>
                        </ul>
                    </div>
                    <p className="item-price"><strike>$400.00</strike> <b>{props.price}</b></p>
                    <p className="item-price"><b>{props.description}</b></p>
                    <a href="#" className="btn btn-primary">Add to Cart</a>
                </div>
            </div>
        </div>
    );
}

export default Product;
