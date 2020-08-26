import React from 'react'
import {connect} from "react-redux"
import {RemoveFromCart,RemoveItem,AddtoCart} from "../../redux/cart/cart.actions"

import "./checkout-item.styles.scss"

const CheckoutItem =({cartItem,ClearItem,RemoveItem,AddtoCart})=>
{
    const {name,imageUrl,price,quantity} = cartItem
    return(
        <div className="checkout-item">
            <div className='image-container'>
                <img src={imageUrl} alt='item'/>
            </div>
            <span className="name">{name}</span>
            <span className="quantity">
                <div className='arrow' onClick={()=>RemoveItem(cartItem)}>&#10094;</div>
                    <span className='value'>{quantity}</span>
                <div className='arrow' onClick={()=>AddtoCart(cartItem)}>&#10095;</div>    
            </span>
            <span className="price">{price}</span>
            <div className="remove-button" onClick={()=>ClearItem(cartItem)}>&#10005;</div>
        </div>
    );
}

const mapDispatchToProps = (dispatch)=>
{
    return{
        ClearItem:item => dispatch(RemoveFromCart(item)),
        RemoveItem:item => dispatch(RemoveItem(item)),
        AddtoCart:item => dispatch(AddtoCart(item))

    }
} 

export default connect(null,mapDispatchToProps)(CheckoutItem);