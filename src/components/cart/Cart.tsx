import React from 'react'
import { useAppDispatch, useAppSelector } from '../../constants/store';
import { image_url } from '../../utils/constant';
import "./cart.css"
import { removeItem,clearCart } from '../../constants/cartSlice';
import noCart from "../../assets/cart_emty.jpg"



const Cart:React.FC = () => {
    const items=useAppSelector((state)=>state.cart.items);
    const totalSum=items.reduce((acc:number,curr:any)=> acc+parseInt(curr.price),0)

    const dispatch=useAppDispatch();


    const removeitemCart=(item:any)=>{
      
        dispatch(removeItem(item))
       
     }
     const clearItem=()=>{
        dispatch(clearCart())
     }
    
  return (
    <div className='row m-5'>
      
        <h4 className='fw-bold m-3'>Cart Items</h4>

{
    items.length==0 ? <div className='mt-5 text-center  col-md-6 food_cart'>
        <div className='no_items'>
        <img src={noCart} alt="" />
        </div>
     
    </div>:
     <div className=' mt-5  col-md-6 food_cart '>
       
     {
         items.map((item)=>( 
         <div key={item._id} className='card p-3  mb-3'>

             <p>{item.name}</p>
             <div className='d-flex justify-content-between'>
                 <div>
                 <img className='cart-food-img' src={`${image_url}${item.image}`} alt="" />
                  <button className='btn btn-sm btn-outline-warning m-3' onClick={()=>{
                     removeitemCart(item)
                  }}>Remove</button>
                 </div>
        
             <span  className=''>Amount: &#8377;{item.price}</span>

             </div>
         
         </div>))
     }
       
 </div>
}
      
   
        <div className='container col-md-4'>
            <p className='fw-bold m-3 bill_detail pt-3'>Bill Details</p>
            <div className='itme_total '>
                <div className="d-flex justify-content-between">
                    <span className='mx-3'>Item Total</span>
                    <span> &#8377;{totalSum}</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className='mx-3'>Delivery Charge</span>
                    <span> &#8377; 70</span>
                </div>
                <div className="d-flex justify-content-between">
                    <span className='mx-3'>tax</span>
                    <span> &#8377; 15</span>
                </div>
                <div className="d-flex justify-content-between  grant_total m-3">
                    <span className='mx-3  mt-3 fw-bolder'>Grant Total</span>
                    {
                        totalSum !==0?<span className='mt-3 fw-bolder'> &#8377;{totalSum+70+15}</span>:<span  className='mt-3 fw-bolder'> &#8377; 0</span>
                    }
                </div>
                <div className='grant_total'>
              

                </div>
                <div className='text-center'>
        <button className='btn btn-warning w-25 mt-5 clear_cart' onClick={()=>{clearItem()}}>clear cart</button>

        </div>
               
            </div>


        </div>
      

     
    </div>
  )
}

export default Cart
