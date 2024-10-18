import { Button } from "@mui/material";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import AllCategoriesButton from "./AllCategoriesButton";

const Navigation = () => {
  const navigate=useNavigate();

   

  return (
    <>
      <nav>
        <div className="container-fluid">
          <div className="row">
            <div className="d-none d-lg-grid col-lg-3 navPart1">
              <AllCategoriesButton />
           
           </div>
            <div className="d-none d-lg-grid col-lg-9 navPart2  align-content-center">
              <div className="mx-auto">
                
                <div className="navMenu ">
                <Button className="">
                  <Link to={"/"}>
                    <i className="ri-home-2-line fw-bold"></i> &nbsp; Home{" "}
                  </Link>
                </Button>
              </div>

              <div className="navMenu">
                <Button className="">
                  <Link to={"/shopAll"}>
                    shop all
                  </Link>
                  </Button>
              </div>


                <div className="navMenu ">
                <Button className=" ">
                  <Link to={"/computers"}>
                   computers
                  </Link>
                  </Button>
                 
                </div>

              <div className="navMenu">
                <Button className="">
                  <Link to={"/tablets"}>Tablets</Link>
                </Button>
              </div>

              <div className="navMenu">
                <Button className="">
                  <Link to={"/drones & Cameras"}>Drones & Cameras</Link>
                </Button>
                </div>

              <div className="navMenu">
                <Button className="navMenu">
                   
                  <Link> Audio</Link>
                </Button>
                  <div className="menuDropDown shadow">
                         <ul>
                           <li><Button><Link to={"/headphones"}>Headphones</Link></Button></li>
                           <li><Button><Link to={"/speakers"}>Speakers</Link></Button></li>
                         </ul>

                  </div>
                  </div>

                <div className="navMenu">
                <Button className="navMenu">
                  <Link to={"/mobiles"}>Mobiles</Link>
                </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navigation;
