import { Button } from '@mui/material';
import React from 'react'
import AllProductsAPI, { products } from '../../api/AllProductsAPI';
import { useNavigate } from 'react-router-dom';


const AllCategoriesButton = () => {
  const navigate=useNavigate();
  return (
    <>
        <div className="allCatContainer">
              <Button className="allCategoryTab">
                <i className="ri-menu-fill"></i>
                <p>All Categories</p>
                <i className="ri-arrow-down-s-line"></i>
                <p className="totalProducts">{`TOTAL ${products.length} PRODUCTS`}</p>
              </Button>
              <div className="menuDropDown shadow">
                            <ul>
                            { Object.keys(AllProductsAPI).map((category)=>{
                                            console.log(AllProductsAPI[category]);
                                            
                                          return(
                                            <>
                                            <li> <Button className="d-flex justify-content-between " onClick={()=>navigate(`/${category}`)}  > {category}   </Button>
                                               
                                            </li>
                                              
                                            </>
                                          )
                                          
                                })}
                            </ul>
                              
                               
                  </div>
            </div>
    </>
  )
}

export default AllCategoriesButton