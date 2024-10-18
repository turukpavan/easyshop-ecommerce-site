import React from 'react'
import AllProductsAPI from '../../api/AllProductsAPI'

const AllProducts = () => {
  return (
    <>
        {Object.keys(AllProductsAPI).map((category)=>(
                          <section className="d-flex flex-column flex-lg-row border justify-content-evenly align-items-center col-6 col-lg-3 ">
                          <div className="w-50">
                            <img
                              src={AllProductsAPI[category][0].img}
                              alt=""
                              className="w-100"
                            />
                          </div>
                          <div className="text-center fs-7">
                            <h5 className="fs-7">{category}</h5>
                            <p>{AllProductsAPI[category].length} items</p>
                          </div>
                   </section>
        ))}
    </>
  )
}

export default AllProducts