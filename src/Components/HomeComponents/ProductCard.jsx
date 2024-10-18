import React, { useState } from 'react'
import { Button, Dialog, Slide } from '@mui/material';
import Rating from '@mui/material/Rating';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { addToCart } from './../../app/features/cart/cartSlice';
import { useDispatch} from 'react-redux';
import CloseIcon from '@mui/icons-material/Close';
import "../ProductDetailsPage/ProductDetails.css"
import { useNavigate } from 'react-router-dom';


const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});


const ProductCard = (props) => {
    // eslint-disable-next-line no-unused-vars
    const dispatch=useDispatch();  
    const [dropDown, setDropDown] = useState(false);
    const [quantity, setQuantity] = useState(1);
    const navigate=useNavigate()
  let id=props.id;

    const closeDropDown=()=>{
      setDropDown(!dropDown)

  }  

  const handleIncrement = () => {
    setQuantity(quantity + 1);
  };

  const handleDecrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

   

  return (
    <>
     
              <div className=' w-100 mx-auto   product-card ' key={props.id}>
              <img src={props.img} alt="" className='w-100 d-block mx-auto  'onClick={()=>navigate(`/productDetails/${props.id}`)} />
              <p className={`discount shadow ${props.discount===0 && "d-none" }`}>{props.discount}%</p>
              <div className='likeAndFullScreenIcon'>
               <Button onClick={()=>setDropDown(true)}><FullscreenIcon /></Button>
               <Button><FavoriteBorderIcon /></Button>
              </div>
              <div className='w-100 mx-auto mt-2'>
              <h6 className='ps-3 fs-7  mx-auto d-block'>{props.name}</h6>
              <p className='ps-3  mb-1 text-success fw-bold'>IN STOCK</p>
              <p className='ps-3 m-0'> <Rating name="read-only" value={props.rating} readOnly /></p>
              <p className='ps-3  text-danger fw-bold'><span className=' text-decoration-line-through text-muted'>₹{props.MRP}</span> ₹{props.price}</p>
              <div className="d-flex justify-content-center">
  <Button className='border border-1 border-primary w-75 rounded-pill fs-8 mb-4' onClick={()=>dispatch(addToCart({id:id,quantity:quantity}))
} >Add to cart</Button>
  <Dialog className="locationModel  " open={dropDown} onClose={closeDropDown} TransitionComponent={Transition} >
            <Button className="close_"onClick={()=>closeDropDown()} >
            <CloseIcon />
            </Button>
            <div className="product-details">
      <h2>{props.name}</h2>
      <hr />
      <div className="product-info">
        <div className="product-image">
          <img src={props.img} alt={props.name} />
        </div>
        <div className="product-description">
          <p>
            Price: ${props.price}
          </p>
          <p className='inStock'>
            {props.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique velit doloremque facilis molestias perferendis aspernatur culpa voluptate dolor labore quos asperiores natus placeat voluptatum quae et ipsa qui consequatur.</p>
          <div className="quantity-control">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div >
          <div className='d-flex flex-wrap'>
          <button className="add-to-cart" onClick={()=>dispatch(addToCart({id:id,quantity:quantity}))}>Add to Cart</button>
          <button className="buy-now" onClick={()=>alert(`Order placed Successfully`)}>Buy Now</button>
          </div>

        </div>
      </div>
      </div>
    </Dialog>
</div>

              </div>
             
           </div>
            {/* )
            
        })
    ))} */}
 </>
  )
}

export default ProductCard