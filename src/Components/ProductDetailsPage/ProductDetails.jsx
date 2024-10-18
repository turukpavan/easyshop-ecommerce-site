import React, { useEffect, useState } from 'react';
import "./ProductDetails.css"
import { useParams } from 'react-router-dom';
import AllProductsAPI from '../../api/AllProductsAPI';
import { useDispatch } from 'react-redux';
import { addToCart } from '../../app/features/cart/cartSlice';
const ProductPage = () => {
    const {id}=useParams();
    const dispatch=useDispatch()
    const [productData,setProductData]=useState({});
    useEffect(()=>{
        let products=[];
        Object.keys(AllProductsAPI).forEach((category)=>{
          AllProductsAPI[category].forEach((item)=>{
            products.push(item);
          })
         });
         
         const requireProduct= products.filter((item)=>item.id===parseInt(id))
         setProductData(requireProduct[0])
    },[])

    
    
    
    
    

  const [quantity, setQuantity] = useState(1);

  const product = {
    
    reviews: [
      {
        name: 'John Doe',
        rating: 5,
        review: 'Excellent product! Highly recommended.',
      },
      {
        name: 'Jane Doe',
        rating: 4,
        review: 'Great product, but battery life could be better.',
      },
      {
        name: 'Bob Smith',
        rating: 5,
        review: 'Love this phone! Best iPhone yet.',
      },
    ],
  };

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
     <div className="product-details">
     <h5 className="mb-3">
                        <a href="/" className="text-body">
                          <i className="fas fa-long-arrow-alt-left me-2"></i>
                          Continue shopping
                        </a>
                      </h5>
                      <hr />
      <h2>{productData.name}</h2>
      <hr />
      <div className="product-info">
        <div className="product-image">
          <img src={`/${productData.img}`} alt={productData.name} />
        </div>
        <div className="product-description">
          <p>
            Price:{productData.price}
          </p>
          <p className='inStock'>
            {productData.inStock ? 'In Stock' : 'Out of Stock'}
          </p>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, similique velit doloremque facilis molestias perferendis aspernatur culpa voluptate dolor labore quos asperiores natus placeat voluptatum quae et ipsa qui consequatur.</p>
          <div className="quantity-control">
            <button onClick={handleDecrement}>-</button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <div className='d-flex flex-wrap'>
          <button className="add-to-cart" onClick={()=>dispatch(addToCart({id:parseInt(id),quantity:quantity}))} >Add to Cart</button>
          <button className="buy-now" onClick={()=>alert(`Order placed Successfully`)}>Buy Now</button>
          </div>
        </div>
      </div>
      <div className="customer-reviews">
        <h2>Customer Reviews</h2>
        {product.reviews.map((review, index) => (
          <div key={index} className="review">
            <h3>{review.name}</h3>
            <p>
              Rating: {review.rating}/5
            </p>
            <p>{review.review}</p>
          </div>
        ))}
      </div>
    </div>

    </>
  )
};

export default ProductPage;