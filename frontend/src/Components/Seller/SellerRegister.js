import React from "react";

const SellerRegister = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        <div className="col-md-8 col-12 offset-2">
          <div className="card">
            <h4 className="card-header">Register</h4>
            <div className="table-body">
              <form className="m-5">
              <div className="mb-3">
                  <label for="first_name" className="form-label">
                    First Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="first_name"
                  />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-3">
                  <label for="username" className="form-label">
                    User Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="username"
                  />
                </div>
                <div className="mb-3">
                  <label for="email" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                  />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="pwd">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                  />
                </div>
                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SellerRegister;
