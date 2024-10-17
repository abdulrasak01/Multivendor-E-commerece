import React from "react";
import SellerSideBar from "./SellerSideBar";

const Reports = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-3 col-12 mb-2">
        <SellerSideBar/>
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="row">
            <div className="col-md-4 col-12 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Monthly Reports</h4>
                  <h4>
                    <a className="btn btn-primary">View</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Yearly Reports</h4>
                  <h4>
                  <a className="btn btn-primary">View</a>
                  </h4>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-12 mb-2">
              <div className="card">
                <div className="card-body text-center">
                  <h4>Daily Reports</h4>
                  <h4>
                  <a className="btn btn-primary">View</a>
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reports;
