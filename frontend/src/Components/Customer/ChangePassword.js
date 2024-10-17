import React from "react";
import SlideBar from "./SideBar";

const ChangePassword = () => {
  return (
    <div className="container mt-4">
         <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SlideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Change Password</h4>
            <div className="table-body">
              <form className="m-5">
                <div className="mb-3">
                  <label for="username" className="form-label">
                    New Password
                  </label>
                  <input type="text" className="form-control" id="username" />
                </div>
                <div className="mb-3">
                  <label className="form-label" for="pwd">
                    Confirm Password
                  </label>
                  <input type="password" className="form-control" id="pwd" />
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

export default ChangePassword;
