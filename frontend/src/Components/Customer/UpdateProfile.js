import React from "react";
import SlideBar from "./SideBar";

const UpdateProfile = () => {
  return (
    <div className="container mt-4">
         <div className="row">
        <div className="col-md-3 col-12 mb-2">
          <SlideBar />
        </div>
        <div className="col-md-9 col-12 mb-2">
          <div className="card">
            <h4 className="card-header">Update Profile</h4>
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
                <div>
                    <div>
                        <label className="form-label">
                            Profile Image
                        </label>
                        <input type="file" className="form-control" id='profileImg'/>
                    </div>
                </div>
                <button type="submit" className="btn btn-primary mt-4">
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

export default UpdateProfile;
