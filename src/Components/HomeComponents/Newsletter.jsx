import React from 'react'
import EmailIcon from '@mui/icons-material/Email';
import { Button } from '@mui/material';

const Newsletter = () => {
  return (
    <>
         <div className="w-100">
            <div className="row newsletter m-0 p-0 pt-5 w-100 ">
              <div className="col-lg-6 ">
                  <div className="m-auto w-85 ">
                      <p className="mb-0">$20 discount for your order</p>
                      <h3>Join Our newsletter and get...</h3>
                      <p className=" my-4 pe-5">Join our email subscription now to get updates on promotions and coupons</p>
                      <div className=" bg-light inputWrapper position-relative ">
                        <input type="text" className=" outline-none w-100 ps-5" placeholder="Your email address" />
                        <p className=""><EmailIcon /></p>
                        <Button>Subscribe</Button>

                      </div>
                  </div>
              </div>
              <div className="col-lg-6">
              <div className="mx-auto ">
                      <img src="/assets/newslater.png" alt=""className="w-100" />
                    
                </div>
              </div>

            </div>
            </div>
    </>
  )
}

export default Newsletter