import React from 'react'
import SingleProduct from './SingleProduct';
const AllProducts = () => {
  return (
   <>
    <section className="latest-products container mt-5">
      <h3 className="mb-4">
        <span className='text-success'>All </span>
         Products
      </h3>
      <div className="row mb-4">
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
        <SingleProduct/>
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
   </>
  )
}

export default AllProducts