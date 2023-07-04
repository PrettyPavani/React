import React,{useContext} from 'react'
import { ShopContext } from '../../context/shop-context';

function CartItem(props) {
    const { id, name, price, image } = props.data;
    const {cartItems,addToCart,removeFromCart,updateCartItemCount} = useContext(ShopContext);  


  return (
    <div className='cartItem'>
        <img src={image} alt={name}/>
        <div className='description'>
            <p>
                <b>
                    {name}
                </b>
            </p>
            <p>
                {price}
            </p>
            <div className='countHandler'>
               <button onClick={()=>addToCart(id)}>+</button>
               <input value={cartItems[id]} onChange={(e)=>updateCartItemCount(Number(e.target.value),id)}/>
               <button onClick={()=>removeFromCart(id)}>-</button>
            </div>
        </div>
    </div>
  )
}

export default CartItem;