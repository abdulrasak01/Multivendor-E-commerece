import React from "react";
import SellerSideBar from "./SellerSideBar";
import { Link } from "react-router-dom";

const SellerProducts = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-12">
              <Link to="/seller/add-product" className="btn btn-success mb-4">
                <i className="fa fa-plus-circle me-1"></i>
                Add Product
              </Link>
            </div>
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr key="">
                    <th>#</th>
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>Product Title</td>
                    <td>Rs. 500</td>
                    <td>Published</td>
                    <td>
                      <button className="btn btn-info btn-sm me-2">View</button>
                      <button className="btn btn-primary btn-sm me-2">
                        Edit
                      </button>
                      <button className="btn btn-danger btn-sm me-2">
                        Delete
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerProducts;
