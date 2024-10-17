import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
const CheckOut = (props) => {
  return (
    <div className="container mt-4">
      <h3 className="mb-4 ">All Items</h3>
      <div className="row">
        <div className="col-md-8 col-12">
        <div className="table-responsive">
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Product</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>
                <Link> <img src={logo} className="img-thumbnail" width={80} /></Link>
                <Link><p>Django</p></Link>
              </td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Link> <img src={logo} className="img-thumbnail" width={80} /></Link>
                <Link><p>Django</p></Link>
              </td>
              <td>Rs. 500</td>
            </tr>
            <tr>
              <td>1</td>
              <td>
                <Link> <img src={logo} className="img-thumbnail" width={80} /></Link>
                <Link><p>Django</p></Link>
              </td>
              <td>Rs. 500</td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <td colspan="2">Total:</td>
              <td>Rs. 1500</td>
            </tr>
            <tr>
                <td colSpan="3" align="center">
                <Link to="/categories" className="btn btn-secondary me-2"> Continue Shopping</Link>
                <Link to="" className="btn btn-success">Proceed to Payment</Link>
                </td>
            </tr>
          </tfoot>
        </table>
      </div>
      
        </div>
      </div>
    </div>
  );
};

export default CheckOut;
