import {CartActionTypes} from './cart.types'

export const toggleCartHidden = () => 
{
    return {
        type:CartActionTypes.TOGGLE_CART_HIDDEN,
    }
}

export const AddtoCart = (item) =>
{
    return {
        type:CartActionTypes.ADD_TO_CART,
        payload:item
    }
}