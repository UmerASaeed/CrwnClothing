import React from 'react'
import {connect} from 'react-redux'
import "./shopItem.styles.scss"
import {AddtoCart} from '../../redux/cart/cart.actions'
import CustomButton from "../custom-button/custom-button.component"

const ShopItem=({item,addToCart,cName})=>
{
    const {name,imageUrl,price} = item; 
    return(
        <div className={cName ? `${cName}`:"ShopItem"}>
            <div className="content">
                <div className="bg-image" style={{backgroundImage:`url(${imageUrl})`}}></div>
                <div className="footer">
                    <div className="name">{name}</div>
                    <div className="price">{"$" + price}</div> 
               </div>   
               <CustomButton className="custom-button add-cart" onClick={()=>addToCart(item)} >Add to Cart</CustomButton>
            </div>
        </div>
    );
}

const mapDispatchToProps = dispatch =>
{
    return{
        addToCart : item => dispatch(AddtoCart(item))
    }
}

export default connect(null,mapDispatchToProps)(ShopItem);