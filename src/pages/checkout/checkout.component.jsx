import React from 'react'
import {connect} from 'react-redux';
import {selectCartItems,selectCartTotal} from "../../redux/cart/cart.selectors"
import CheckoutItem from "../../components/checkout-item/checkout-item.component"
import StripeCheckoutButton from "../../components/stripe-button/stripe-button.component"
import "./checkout.styles.scss"

const CheckoutPage = ({cartItems,cartTotal})=>
{

    return(
        <div className='checkout-page'>
            <div className="checkout-header">
                <div className='header-block'>
                    <span>Product</span>
                </div>
                <div className='header-block'>
                    <span>Description</span>
                </div>
                <div className='header-block'>
                    <span>Quantity</span>
                </div>
                <div className='header-block'>
                    <span>Price</span>
                </div>
                <div className='header-block'>
                    <span>Remove</span>
                </div>
            </div>
            {
                cartItems.map(item=>
                {
                    return <CheckoutItem key={item.id} cartItem={item}/>
                })
            }
            <div className='total'>
                <span>TOTAL: ${cartTotal}</span>
            </div>
            <div className='test-warning'>
                    *Please use the following test credit for payments*
                    <br/>
                    4242 4242 4242 4242 -Exp:01/21 - CVV:123
                </div>
            <StripeCheckoutButton price={cartTotal}/>
            <br/>
            <br/>
        </div>
    );
}

const mapStateToProps = state =>
{    
    return{
        cartItems:selectCartItems(state),
        cartTotal:selectCartTotal(state)
    }
}


export default connect(mapStateToProps)(CheckoutPage);