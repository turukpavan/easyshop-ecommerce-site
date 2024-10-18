import React from 'react'
import AllProductsAPI from '../../api/AllProductsAPI'
import ProductCard from '../../Components/HomeComponents/ProductCard'
import Header from '../../Components/Header/Header'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Footer from '../../Components/HomeComponents/Footer';
import Newsletter from '../../Components/HomeComponents/Newsletter';

function valuetext(value) {
    return `$${value.toLocaleString()}`;
  }
  

const ShopAll = () => {
    const [value, setValue] = React.useState([0, 45000]);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
  return (
    <>
      <div className="container-fluid overflow-hidden">
        <Header />
        <div className="row">
        <section className="col-md-4 col-lg-3">
           <div>
           <h2>Filter By</h2>
            <hr />
            <p>price</p>
            <Box className="w-90 mx-auto">
      <Slider
        getAriaLabel={() => 'Price range'}
        value={value}
        onChange={handleChange}
        min={0}
        max={45000}
        step={100}
        getAriaValueText={valuetext}
      />
    </Box>

            
            <div className='d-flex'>
                <span>{value[0]}</span>
                <span className=' ms-auto'>{value[1]}</span>
            </div>
            <hr />
           </div>
        </section>
        <section className="col-md-8 col-lg-9">
            <h1>All Products</h1>
            <div className="row">
            {Object.keys(AllProductsAPI).map((category)=>
        AllProductsAPI[category].filter((pro)=>pro.price>=value[0] && pro.price<=value[1]).map((item)=>(

         <div className="col-6 col-md-4 col-lg-3">
               <ProductCard id={item.id} img={item.img} name={item.name} price={item.price} MRP={item.MRP} discount={item.discount} inStock={item.inStock} isBestSeller={item.isBestSeller} isTrending={item.isTrending} rating={item.rating}  />
         </div>
            
        ))    
    )}
            </div>
        </section>
        </div>
      </div>
        <Newsletter />
        <Footer />
    </>
  )
}

export default ShopAll