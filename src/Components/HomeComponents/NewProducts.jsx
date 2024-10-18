import React from 'react'
import ProductCard from './ProductCard';
import AllProductsAPI from '../../api/AllProductsAPI';

const NewProducts = () => {
  return (
    <>
    {Object.keys(AllProductsAPI).map((category)=>
        AllProductsAPI[category].filter((prod)=>prod.isNew===true).map((item)=>(

         <div className="col-6 col-md-4 col-lg-3">
               <ProductCard id={item.id} img={item.img} name={item.name} price={item.price} MRP={item.MRP} discount={item.discount} inStock={item.inStock} isBestSeller={item.isBestSeller} isTrending={item.isTrending} rating={item.rating}  />
         </div>
            
        ))    
    )}
    </>
  )
}

export default NewProducts