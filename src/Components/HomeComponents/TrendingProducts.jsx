import React from 'react'
import AllProductsAPI from '../../api/AllProductsAPI'

const TrendingProducts = () => {
  return (
    <>

        {Object.keys(AllProductsAPI).map((category)=>(
            AllProductsAPI[category].filter((prod)=>prod.isTrending===true).map((item)=>(
                <div className="d-flex  justify-content-around align-items-center w-100 border-bottom">
                <img
                  src={item.img}
                  alt=""
                  className="trending_product_img w-35 pe-2"
                />
                <div className="py-2">
                  <h6 className=" text-capitalize fs-7">
                    {item.name}
                  </h6>
                  <p className=" text-danger p-0 fw-bold">
                  
                    <p className="text-muted p-0 m-0  text-decoration-line-through ">${item.MRP}</p>
                    ${item.price}
                  </p>
                </div>
              </div>

            ))
        ))
        }
    </>
  )
}

export default TrendingProducts