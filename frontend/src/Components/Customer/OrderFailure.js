import React from 'react'
import { Link } from "react-router-dom";
const OrderFailure = () => {
  return (
    <div>
        <div>
            <h1>Order Failed</h1>
            <p>Sorry, your order could not be processed. Please try again.</p>
        </div>
        <div className="text-center">
    <Link to="/" className="btn btn-primary me-3">
      Continue Shopping
    </Link>
    <Link to="/customer/orders" className="btn btn-primary me-3">
      My Orders
    </Link>
    </div>
    </div>
  )
}

export default OrderFailure