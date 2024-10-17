import React from "react";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
const OrderSuccess = (props) => {
  return (
   <div>
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-12 col-12">
          <div className="alert alert-success" role="alert">
            Your order has been successfully placed. Thank you for your purchase.
          </div>
        </div>
      </div>
    </div>
    <div className="text-center">
    <Link to="/" className="btn btn-primary me-3">
      Continue Shopping
    </Link>
    <Link to="/customer/orders" className="btn btn-primary me-3">
      My Orders
    </Link>
    <Link to="/customer/login" className="btn btn-primary me-3">
      Logout
    </Link>
    </div>
    </div>
  );
};

export default OrderSuccess;
