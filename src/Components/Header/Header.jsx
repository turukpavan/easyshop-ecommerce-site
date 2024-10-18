import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import CloseIcon from '@mui/icons-material/Close';
import SearchBox from "./SearchBox";
import Navigation from "./Navigation";
import { Button } from "@mui/material";
import AllCategoriesButton from "./AllCategoriesButton";
import CountriesDropDown from './CountriesDropDown';
import { useDispatch, useSelector } from "react-redux";
import { setSubTotal } from "../../app/features/cart/cartSlice";


const Header = () => {
  // const URL='https://api.first.org/data/v1/countries';
  const URL = "https://countriesnow.space/api/v0.1/countries/";
  
  const [countriesData, setCountriesData] = useState([]);
  const [toggleMenu, setToggleMenu]=useState(false);
  const navigate=useNavigate();
  const showCartItems = useSelector((state) => state.cart.cartItems);
  const subTotal=useSelector((state)=>state.cart.subTotal)
  const dispatch = useDispatch()
  useEffect(()=>{
      if(showCartItems.length!==0){
        dispatch(setSubTotal(showCartItems));
      }

  },[showCartItems,dispatch])


  const handleCountriesAPI = async (url) => {
    try {
      const response = await fetch(url);
      const result = await response.json();
      const data = result.data;
      const countries = data.map((item) => item.country); //map is use only for array data
      console.log(countries);

      setCountriesData(countries);
    } catch (error) {
      console.log(`data not found ${error}`);
    }

    // const countries=[];
    //   for (const key in data) {  //for in used for object data
    //     countries.push(data[key].country);
    //   }
    // setCountriesData(countries);
  };

  useEffect(() => {
    handleCountriesAPI(URL);
  }, []);

  return (
    <>
      <div className="headerWrapper m-md-0 p-md-0 pb-lg-3">
        {/* toggle menu */}
        {toggleMenu &&   <div className= "toggle_menu">
              {/* logo section */}
          <Button onClick={()=>setToggleMenu(false)}><CloseIcon /> </Button>
              <div className="logoWrapper ps-2 py-2 text-start">
              <Link to="/"> EasyShop</Link>
              <p className=" w-100">Online Shopping Center</p>
              </div>
              {/* logo section */}
              <div>
                  <CountriesDropDown data={countriesData} />
                </div>

                <div>
                  {/* input box */}
                  <SearchBox />
                </div>
                <div>
                  <AllCategoriesButton />
                </div>
        </div>}
        {/* toggle menu */}
            {/* header */}
        {/* <div className="top_strip bg_blue">
          <div className="container">
            <p className=" my-0 text-center">
              Due to the COVID 19 epidemic, orders may be processed with a
              slight delay
            </p>
          </div>
        </div>
            header */}

        {/* main header */}
        <div className="header my-lg-3 ">
          <div className=" container-fluid  ">
            <div className="row align-items-center w-100 ">

              {/* toggle button */}
              <div className="d-inline-block col-4 col-sm-4 d-lg-none">
                <Button className=" p-0  toggle_button" onClick={()=>setToggleMenu(true)}>
                  <MenuOpenIcon />
                </Button>
              </div>

              {/* toggle button */}
              {/* toggle menu */}
              {/*  ******** logo section******** */}
              <div className="logoWrapper col-4 col-sm-4 col-lg-2 text-center p-0 ">
                <Link to="/"> EasyShop</Link>
                <p>Online Shopping Center</p>
              </div>
              {/*  ******** logo section******** */}

              {/*  ******************* */}
              <div className="col-4 col-sm-4 col-lg-10 d-flex justify-content-end p-0 ms-auto ">
                <div className="d-none d-lg-flex w-75 countryInput mx-auto">
                  <CountriesDropDown data={countriesData} />
                  {/* input box */}
                  <SearchBox />
                </div>

                <div className="account d-none d-md-block ">
                  <i className="ri-user-line"></i>
                </div>

                {/* ***********cart*********** */}
                <div className="cart ">
                  <p className="price mb-0">{subTotal}</p>
                  <div className="cartLogo" onClick={()=>navigate("/cart")}>
                    <i className="ri-shopping-basket-line"></i>
                    <p>{showCartItems.length}</p>
                  <div className="cart-dropdown shadow overflow-scroll">
                  {showCartItems.length===0 ? 
                    <div className="w-100 h-100 d-flex flex-column justify-content-end">
                        <div className="flexDiv d-flex flex-column align-items-center justify-content-center h-75 border-bottom mb-4">
                            <span className="dropdown-cart-basket"><i className="ri-shopping-basket-line"></i>
                            </span>
                            <p className=" m-0 mt-3">No product in the cart.</p>
                        </div>  
                        <div>
                          <p className="fs-7 text-center">we reduce shipping price to only 2.49$!</p>
                        </div>  
                    </div> :showCartItems.map((item)=>( <div className="card mb-2 ">
                              <div className="card-body">
                                <div className="d-flex justify-content-between">
                                  <div className="d-flex flex-row align-items-center">
                                    <div>
                                      <img
                                        src={item.img}
                                        className="img-fluid rounded-3"
                                        alt="Shopping item"
                                        style={{ width: "65px" }}
                                      />
                                    </div>
                                    <div className="ms-3">
                                      <h5 className="fs-8">{item.name}</h5>
                                    </div>
                                  </div>
                                  <div className="d-flex flex-row align-items-center">
                                   
                                    <div style={{ width: "50px" }}>
                                      <h5 className="fw-normal mb-0">{item.quantity}</h5>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                            ))}                    
                   </div>
                  </div>
                </div>
              {/* ***********cart********** */}
              </div>
              {/* toggle menu */}
            </div>
            {/* *********************** */}
          </div>
        </div>
        {/* navigation start*/}

        <Navigation />

        {/* navigation end*/}
      </div>
    </>
  );
};

export default Header;
