import React from 'react'
import LocalCafeOutlinedIcon from '@mui/icons-material/LocalCafeOutlined';
import ElectricMopedOutlinedIcon from '@mui/icons-material/ElectricMopedOutlined';
import PercentOutlinedIcon from '@mui/icons-material/PercentOutlined';
import CurrencyExchangeOutlinedIcon from '@mui/icons-material/CurrencyExchangeOutlined';
import PhoneForwardedOutlinedIcon from '@mui/icons-material/PhoneForwardedOutlined';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <>
      <footer className="w-100 footer">
            <div className=" container ">
                <div className="row  fw-medium footer-1">
                    <div className="col-md-6 col-lg-3 text-center border border-0  border-end py-2 ">
                        <p className='icon'><LocalCafeOutlinedIcon /> </p>
                        <p>Everyday fresh products</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center border border-0  border-end py-2 ">
                        <p className='icon'><ElectricMopedOutlinedIcon /></p>
                        <p>Free delivery for order over $70</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center border border-0  border-end py-2 ">
                        <p className='icon'> <PercentOutlinedIcon /></p>
                        <p>Daily Mega Discounts</p>
                    </div>
                    <div className="col-md-6 col-lg-3 text-center border border-0  border-end py-2 ">
                        <p className='icon'> <CurrencyExchangeOutlinedIcon /></p>
                        <p>Best price on the market</p>
                    </div>
                </div>
                <div className="row footer-2">
                
                <section className=" col-md">
                    <h6 className="text-uppercase">Store Location</h6>
                    <p className="text-muted">500 Terry Francine Street <br />
                    San Francisco, CA 94158 <br />
                    info@mysite.com <br />
                    123-456-7890</p>
 

                </section>

                <section className=" col-md"> 
                    <h6 className='text-uppercase'>shop</h6>
                    {["shopAll","computers","tablets","drones & Cameras","headphones","speakers","mobiles","T.V & Home cinema","Wearable Tech" ].map((category)=><Link to={`/${category}`} className="d-block text-muted text-decoration-none fs-7 footer-links text-capitalize" >{category} </Link>)}
                 
                </section>

                <section className=" col-md">
                    <h6 className="text-uppercase">Customer Support</h6>
                    {["Contact us","help center","about us","careers"].map((item)=><Link  className="d-block text-muted text-decoration-none fs-7 footer-links text-capitalize" >{item} </Link>)}                    
                  
                </section>

                <section className=" col-md">
                    <h6 className="text-uppercase">policy</h6>
                    {["Shipping & Returns","Terms & Condition","Payment methods","FAQ"].map((item)=><Link  className="d-block text-muted text-decoration-none fs-7 footer-links text-capitalize" >{item} </Link>)} 
                   
                </section>

 
                </div>
            </div>

            <div className=" container-fluid py-5 border-bottom">
                <div className='footer-3 d-flex flex-column flex-md-row flex-lg-row align-items-center align-items-md-center justify-content-md-around'>
                    <section className='d-flex flex-row flex-md-column flex-lg-row align-items-center justify-content-md-around '>
                        <div>
                            <span className='border p-3 rounded-circle me-3'> <PhoneForwardedOutlinedIcon /></span>
                        </div>
                        <div className='py-4'>
                            <h5 className='m-0'>70 389 156-51</h5>
                            <p className='m-0 fs-7'>working 8:00 - 22:00</p>
                        </div>
                    </section>
                    <section className='d-flex  flex-md-row align-items-center '>
                        <div className='me-2 '>
                            <h6 className='m-0 ps-2'>Download App on mobile :</h6>
                            <p className='m-0 fs-7 text-muted'>15% discount on your first purchase</p>
                        </div>
                        <div className='d-flex flex-column flex-lg-row '>
                            <Button className='p-0  appStore'><img src="/assets/playstore.JPG" alt="" className='w-100' /></Button>
                            <Button className='p-0  appStore'><img src="/assets/appleStore.JPG" alt="" className='w-100' /></Button>
                        </div>
                    
                    </section>
                    <section className='d-flex pt-5 pt-md-0 pt-lg-0'>
                        <Button className='social_links '><Link to="https://www.linkedin.com/in/pavan-turuk-2377122ba" className=' text-decoration-none text-dark'><i class="ri-linkedin-box-fill"></i></Link></Button>
                        <Button className='social_links '><Link to="https://github.com/turukpavan/easyshop-ecommerce-site" className=' text-decoration-none text-dark'><i class="ri-github-fill"></i></Link></Button>
                        <Button className='social_links '><Link to="https://my-react-bootstrap-portfolio.netlify.app" className=' text-decoration-none text-dark'><i class="ri-profile-line"></i></Link></Button>
                        
                    </section>
                </div>
            </div>
            <div className='container-fluid'>
            <div className='footer-4 d-flex flex-column  flex-lg-row align-items-md-center   mb-0 p-md-3 justify-content-between'>
                   <section><p className='m-0 text-muted '>Copyright 2024 © Design and developed by Pavan Turuk.</p></section>
                   <section className='d-flex flex-column flex-md-row align-items-center'>
                            <div>
                                <span className='text-muted pe-2 fs-7 '>Privacy Policy</span>
                                <span className='text-muted pe-2 fs-7 '>Terms and Conditions</span>
                                <span className='text-muted pe-2 fs-7 '>Cookie</span>
                            </div>
                            <div className=' mt-3 mt-md-0'>
                                <img src="/assets/payments.webp" className='w-100' alt="" />
                            </div>
                    </section>     
                </div>
             </div>
        </footer>  
    </>
  )
}

export default Footer