import React from 'react'
import Slider from "react-slick";
import HomeSliderApi from '../../api/HomeSliderApi';

const HomeSlider = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrow : true,
        autoplay:true
        
      };
  return (
    <div className="homeSliderSection">
    <Slider {...settings} className='' > 
        {HomeSliderApi.map((obj)=><div className="item">
            <img src={obj.img} alt="" className='' />
        </div>)}
      
     
    </Slider>
    </div>
  )
}

export default HomeSlider
