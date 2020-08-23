import React from "react"
import CustomButton from "../custom-button/custom-button.component"
import {connect} from "react-redux"
import CartItem from "../cart-item/cart-item.component"
import {selectCartItems} from "../../redux/cart/cart.selectors"

import "./cart-dropdown.styles.scss"

const CartDropDown = ({cartItems}) =>
{
    return(
        <div className='cart-dropdown'>
            <div className = "cart-items">
               { 
                cartItems.map(item =>
                {
                    return <CartItem key={item.id} item={item}/>
                })
               }
            </div>
            <CustomButton className="custom-button CstmBtn">GO TO CHECKOUT</CustomButton>
        </div>
    );

}


const mapStateToProps = (state)=>
{
    return{
        cartItems:selectCartItems(state)
    }
}

export default connect(mapStateToProps)(CartDropDown);