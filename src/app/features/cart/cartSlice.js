import { createSlice } from '@reduxjs/toolkit'
import AllProductsAPI from '../../../api/AllProductsAPI';

const initialState = {
  cartItems: [],
  subTotal:0,
}


export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
        addToCart:(state,action)=>{
          const {id,quantity}=action.payload
            console.log(`id=> ${id} quantity=>${quantity}`);
            
          let itemExists=false;
          state.cartItems.forEach((item)=>{
            if(item.id===id){
              itemExists=true
              item.quantity=item.quantity+quantity
            }})
              let products=[];
            Object.keys(AllProductsAPI).forEach((category)=>{
              AllProductsAPI[category].forEach((item)=>{
                products.push(item);
              })
             });
             if(!itemExists){
             products.forEach((item)=>{
              if(item.id===id){
                state.cartItems.push({...item,quantity:quantity});
              }
             })
            
             }
      
             console.log(state.subTotal);
             
        },

        setSubTotal :(state,action)=>{
          let total=0;
            const data=action.payload
            data.forEach((product)=>{
            total=total+(product.price * product.quantity)
              
            }) 
            state.subTotal=total

            
        
                                 
        },

        deleteFromCart:{}
  },
})

// Action creators are generated for each case reducer function
export const { addToCart,setSubTotal, deleteFromCart } = cartSlice.actions

export default cartSlice.reducer