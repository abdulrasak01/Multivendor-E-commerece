import React from 'react'
import logo from "../logo.svg";
import { Link } from 'react-router-dom';
const SingleProduct = (props) => {
  return (
    <div className="col-12 col-md-3 mb-4">
          <div className="card">
            <Link to='/product/python-timer/123'><img src={logo} className="card-img-top" alt="..." /></Link>
            <div className="card-body">
            <Link to='/product/python-timer/123'>
              <h4 className="card-title">{props.title}</h4>
              </Link>
              <h5>
                Price: <span className="text-muted">Rs. 500</span>
              </h5>
            </div>
            <div className="card-footer">
              <button title="Add to cart" className="btn btn-success">
                <i className="fa-solid fa-cart-shopping"></i>
              </button>
              <button
                title="Add to wishlist"
                className="btn btn-danger ms-1"
              >
                <i className="fa-solid fa-heart"></i>
              </button>
            </div>
          </div>
        </div>
  )
}

export default SingleProduct