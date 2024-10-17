import React from "react";
import SellerSideBar from "./SellerSideBar";

const Customers = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SellerSideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="table-responsive">
              <table className="table table-bordered">
                <thead>
                  <tr key="">
                    <th>#</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Mobile</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                        John
                    </td>
                    <td>John@gmail.com</td>
                    <td>
                      8732638377
                    </td>
                    <td><button className="btn btn-danger btn-sm me-2">Remove from list </button>
                    <button className="btn btn-primary btn-sm">Orders</button>
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

export default Customers;
