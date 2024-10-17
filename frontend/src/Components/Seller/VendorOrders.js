import React from "react";
import SellerSideBar from "./SellerSideBar";
import logo from "../../logo.svg";
import { Link } from "react-router-dom";
import Dropdown from "react-bootstrap/Dropdown";
import DropdownButton from "react-bootstrap/DropdownButton";

const VendorOrders = () => {
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
                    <th>Product</th>
                    <th>Price</th>
                    <th>Status</th>
                    <th>Action</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <Link>
                        {" "}
                        <img src={logo} className="img-thumbnail" width={80} />
                      </Link>
                      <Link>
                        <p>Django</p>
                      </Link>
                    </td>
                    <td>Rs. 500</td>
                    <td>
                      <span className="text-success">
                        <i className="fa fa-check-circle"></i> Delivered
                      </span>
                    </td>
                    <td>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Change Action"
                      >
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sent</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Complete
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <Link>
                        {" "}
                        <img src={logo} className="img-thumbnail" width={80} />
                      </Link>
                      <Link>
                        <p>Django</p>
                      </Link>
                    </td>
                    <td>Rs. 500</td>
                    <td>
                      <span className="text-secondary">
                        <i className="fa fa-spin fa-spinner"></i> Processing
                      </span>
                    </td>
                    <td>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Change Action"
                      >
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sent</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Complete
                        </Dropdown.Item>
                      </DropdownButton>
                    </td>
                  </tr>
                  <tr>
                    <td>1</td>
                    <td>
                      <Link>
                        {" "}
                        <img src={logo} className="img-thumbnail" width={80} />
                      </Link>
                      <Link>
                        <p>Django</p>
                      </Link>
                    </td>
                    <td>Rs. 500</td>
                    <td>
                      <span className="text-danger">
                        <i className="fa fa-times-circle"></i> Cancelled
                      </span>
                    </td>
                    <td>
                      <DropdownButton
                        id="dropdown-basic-button"
                        title="Change Action"
                      >
                        <Dropdown.Item href="#/action-1">Approve</Dropdown.Item>
                        <Dropdown.Item href="#/action-2">Sent</Dropdown.Item>
                        <Dropdown.Item href="#/action-3">
                          Complete
                        </Dropdown.Item>
                      </DropdownButton>
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

export default VendorOrders;
