import React from "react";
import logo from "../logo.svg";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import SingleProduct from "./SingleProduct";

const ProductDetail = () => {
  return (
    <section className="container mt-4">
      <div className="row">
        <div className="col-4">
          <Carousel className=" mt-5 pt-3 carousel-dark">
            <Carousel.Item>
              <img src={logo} className="card-img-top mb-5" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={logo} className="card-img-top mb-5" alt="..." />
            </Carousel.Item>
            <Carousel.Item>
              <img src={logo} className="card-img-top mb-5" alt="..." />
            </Carousel.Item>
          </Carousel>
        </div>
        <div className="col-8">
          <h1>Product Title</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          <h5>
            {" "}
            Price: <span className="text-muted">Rs. 500</span>
          </h5>
          <p>
            <Link title="Demo" target="blank" className="btn btn-dark ms-1">
              {" "}
              Demo <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <button title="Add to cart" className="btn btn-success ms-1">
              {" "}
              Add to cart <i className="fa-solid fa-cart-shopping"></i>
            </button>
            <button title="buy now" className="btn btn-primary ms-1">
              <i class="fa-solid fa-bag-shopping"></i> Buy now
            </button>
            <button title="Add to wishlist" className="btn btn-danger ms-1">
              <i className="fa-solid fa-heart"></i> Wishlist
            </button>
          </p>
          <div className="product tags">
            <h5>Tags</h5>
            <p className="mt-3">
              <Link to="#" className="badge bg-secondary text-white me-1">
                Python
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Django
              </Link>
              <Link to="#" className="badge bg-secondary text-white me-1">
                Web script
              </Link>
            </p>
          </div>
        </div>
      </div>
      {/* Related products */}
      <Carousel controls={false} className=" mt-5 pt-3 carousel-dark">
        <Carousel.Item>
          <div className="row mb-5">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mb-5">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </Carousel.Item>
        <Carousel.Item>
          <div className="row mb-5">
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
            <SingleProduct />
          </div>
        </Carousel.Item>
      </Carousel>
      {/* End related products */}
    </section>
  );
};

export default ProductDetail;
