import HomeSlider from "../../Components/HomeComponents/HomeSlider";
import ProductSlider from "../../Components/HomeComponents/ProductSlider";
import { Button } from "@mui/material";
import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
import Timer1 from "../../Components/HomeComponents/Timer";
import SystemUpdateIcon from "@mui/icons-material/SystemUpdate";
import DeliveryDiningIcon from "@mui/icons-material/DeliveryDining";
import AvTimerIcon from "@mui/icons-material/AvTimer";
import Footer from "../../Components/HomeComponents/Footer";
import Newsletter from "../../Components/HomeComponents/Newsletter";
import Header from "../../Components/Header/Header";
import NewProducts from "../../Components/HomeComponents/NewProducts";
import TrendingProducts from "../../Components/HomeComponents/TrendingProducts";
import AllProducts from "../../Components/HomeComponents/AllProducts";
const Home = () => {


  return (
    <>
      {/* header */}
        <Header />
      {/* header */}
      {/* slider */}
      <HomeSlider />
      {/* slider */}

      <div className="homeProducts overflow-hidden">
        <div className="container overflow-hidden">
          <div className="row">
            {/* side panel */}
            <div className="px-0 col-md-3 order-2 order-md-1  overflow-hidden banner_div  ">
              {/* side ads */}
              <div className="container ">

               <div className="side-ad-container row">
                <div className="mx-auto overflow-hidden col-6 col-md-12 mt-3">
              <img src="/assets/bannerIMG/banner-img-5.webp" className="w-100 h-100 rounded " alt="" />
              </div>
              {/* side ads */}
              <div className="mx-auto  overflow-hidden col-6 col-md-12 mt-3">
              <img src="/assets/bannerIMG/banner-img-6.webp" className="w-100 h-100  rounded " alt="" />
              </div>
              {/* side ads */}
              </div>
              </div>
              
              
              {/* tips section */}
              <div className="border_ rounded m-2 ">
                <div className=" p-4 fs-7 d-flex align-items-center">

                  <p className=" pe-3">
                    <SystemUpdateIcon />
                  </p>
                  <p>Download the Bacola App to your Phone.</p>
                </div>
                <div className="border border-0 border-top border-bottom  p-4 fs-7 d-flex  align-items-center">
                  <p className=" pe-3">
                    <DeliveryDiningIcon />
                  </p>
                  <p>Order now so you dont miss the opportunities.</p>
                </div>
                <div className=" p-4 fs-7 d-flex  align-items-center">
                  <p className="pe-3">
                    {" "}
                    <AvTimerIcon />
                  </p>
                  <p>Your order will arrive at your door in 15 minutes</p>
                </div>
              </div>
              {/* tips section */}
              {/* trending product side panel */}
              <div>
              <h3 className=" fs-6 my-4 ms-4 text-uppercase">trending Product</h3>

                <div className="border_ w-90 mx-auto">
                 <TrendingProducts />
                </div>
              </div>
              {/* trending product side panel */}
              {/* customer Comment */}
              <div className="">
                <h3 className=" fs-6 my-4 ms-4 text-uppercase py-3">
                  customer comment
                </h3>
                <div className="comment_side_panel w-100 rounded p-3 mx-auto">
                  <div className="pb-4">
                    <h6>The Best Marketplace</h6>
                    <p className=" text-muted fs-7">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Alias assumenda nobis distinctio.
                    </p>
                  </div>
                  <div className="d-flex align-items-center justify-content-center ">
                    <div className="w-25">
                      <img
                        src="/assets/comment.webp"
                        alt=""
                        className="w-100 rounded-circle d-block "
                      />
                    </div>
                    <div className="ps-3">
                      <h6 className=" mb-0">
                        Tina <br /> Mcdonnell
                      </h6>
                      <p className="fs-7 mb-0">sales Manager</p>
                    </div>
                  </div>
                </div>
              </div>
              {/* customer Comment */}
              {/* side panel */}
            </div>
              {/* main panel */}
            <div className="col-md-9 order-1 order-md-2">
              {/* best sellers section */}
              <div className="d-flex justify-content-between my-2">
                <div>
                  <h3 className="p-0 m-0  text-uppercase">Best Sellers</h3>
                  <p className=" text-muted p-0 m-0 pb-2 ">
                    Do not miss the current offers <br /> until the end of March.
                  </p>
                </div>
                <div>
                  <Button className="border rounded-pill  text-muted px-3 px-md-4 fs-8">
                    View All <ArrowRightAltIcon />
                  </Button>
                </div>
              </div>
              <ProductSlider  />
              {/* best seller section */}
              {/* health tips section */}
              <div className=" text-muted safety-note_div">
                <p>Always taking Care</p>
                <h3>
                  In store or online your health and safety is our top priority
                </h3>
              </div>
              {/* health tips section */}
              {/* Hot product section */}
              <div className="d-flex justify-content-between mb-2">
                <div>
                  <h5 className="p-0 m-0  text-uppercase">
                    HOT PRODUCT FOR{" "}
                    <p className=" text-danger">THIS WEEK</p>
                  </h5>
                  <p className="fs-7 text-muted p-0 m-0 pb-2 ">
                    Don't miss this opportunity at a special <br /> discount just for
                    this week.
                  </p>
                </div>
                <div>
                  <Button className="border rounded-pill text-muted px-3 px-md-4 fs-8">
                    View All <ArrowRightAltIcon />
                  </Button>
                </div>
              </div>
              <div className=" row border border-danger rounded p-2 m-1 w-100">
                <div className="col-md-3 position-relative">
                  <img
                    src="/assets/product-image-50.webp"
                    className="w-100 "
                    alt=""
                  />
                  <p className=" position-absolute top-0 start-0 bg-danger rounded-circle p-3 text-white">
                    19%
                  </p>
                </div>
                <div className="col-md-9">
                  <p className="  ps-3  text-danger fw-bold">
                    <p className=" text-decoration-line-through text-muted">
                      ₹800
                    </p>{" "}
                    ₹450
                  </p>
                  <h4 className="ps-3">
                    Chobani Complete Vanilla Greek Yogurt
                  </h4>
                  <p className="text-muted ps-3">
                    1 kg{" "}
                    <p className="text-success fs-7 fw-medium">
                      IN STOCK
                    </p>
                  </p>
                  <Timer1 duration={2 * 45 * 30 * 30 * 1000} />
                </div>
              </div>
              {/* Hot product section */}
              {/* new product section */}
              <div className="d-flex justify-content-between my-3">
                <div>
                  <h5 className=" p-0 ps-1  m-0  text-uppercase">
                    NEW PRODUCTS
                  </h5>
                  <p className="fs-7 text-muted p-0 ps-1 m-0 pb-2 ">
                    New products with updated stocks.
                  </p>
                </div>
                <div>
                  <Button className="border rounded-pill text-muted px-3 px-md-4 fs-8">
                    View All <ArrowRightAltIcon />
                  </Button>
                </div>
              </div>
              <div className="row">
                   <NewProducts />
              </div>
              {/* new product section */}
              {/* discount banner section */}
              <div className="container-fluid">
              <div className="row ">
                <div className="col-md-12  mt-3 p-0 discount-banner mx-auto rounded">
                  <img
                    src="/assets/bannerIMG/banner-img-7dron.png"
                    alt=""
                    className=" w-100 overflow-hidden object-fit-cover  rounded "
                  />
                  <div className="overlay">
                    <div>
                      <p className="special"> Today's Special</p>
                      <h5>best Arial view in town</h5>
                      <h1 className=""><span>30%</span>OFF</h1>
                      <h5 className="">on professional camera drones</h5>
                      <p className="para">Limited quantities. <br />See product details page for availability </p>
                      <div className="d-flex p-0 m-0">

                      <Button className="rounded-pill">Shop</Button>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
                
              </div>
            </div>
          </div>
          {/* discount banner section */}

          {/* All items */}
          <div className="border_ container-fluid my-4">
            <div className="row">
                  <AllProducts />             
            </div>
          </div>
          {/* all items */}
        

          {/* main panel */}
           </div>
          {/* news letter */}
            <Newsletter />
          {/* news letter */}
          {/* footer section */}
          <footer>
            <Footer />
          </footer>
         {/* footer section */}

      </div>
    </>
  );
};

export default Home;
