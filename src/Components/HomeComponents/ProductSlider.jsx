import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import ProductCard from "./ProductCard";
import AllProductsAPI from "../../api/AllProductsAPI";

const ProductSlider = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 2,
    },
  };
  return <Carousel responsive={responsive}>
        {Object.keys(AllProductsAPI).map((category)=>(
          AllProductsAPI[category].filter(cat=>cat.isBestSeller===true).map((item)=>(

            <ProductCard id={item.id} img={item.img} name={item.name} price={item.price} MRP={item.MRP} discount={item.discount} inStock={item.inStock} isBestSeller={item.isBestSeller} isTrending={item.isTrending} rating={item.rating}  />
          )
          )
        )) }

          

        </Carousel>;
};

export default ProductSlider;
