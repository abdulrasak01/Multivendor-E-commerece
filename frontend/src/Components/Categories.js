import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";

const Categories = () => {
  return (
    <section className="container mt-4">
      <div className="popular-categories">
        <h3 className="mb-4">
          All Categories
        </h3>
        <div className="row">
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title"><Link to='/category/python/1'>Category Title</Link></h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title"><Link to='/'>Category Title</Link></h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title"><Link to='/'>Category Title</Link></h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title"><Link to='/'>Category Title</Link></h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product Title</h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
          {/* product box */}
          <div className="col-12 col-md-3 mb-4">
            <div className="card">
              <img src={logo} className="card-img-top" alt="..." />
              <div className="card-body">
                <h4 className="card-title">Product Title</h4>
              </div>
              <div className="card-footer">Product downloads: 123</div>
            </div>
          </div>
          {/* productbox end */}
        </div>
      </div>
      <nav aria-label="Page navigation example">
    <ul class="pagination">
        <li class="page-item"><a class="page-link" href="#">Previous</a></li>
        <li class="page-item"><a class="page-link" href="#">1</a></li>
        <li class="page-item"><a class="page-link" href="#">2</a></li>
        <li class="page-item"><a class="page-link" href="#">3</a></li>
        <li class="page-item"><a class="page-link" href="#">Next</a></li>
    </ul>
    </nav>
    </section>
  );
};

export default Categories;
