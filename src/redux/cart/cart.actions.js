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

export const RemoveFromCart = (item) =>
{
    return {
        type:CartActionTypes.REMOVE_FROM_CART,
        payload:item
    }
}

export const RemoveItem = (item) =>
{
    return{
        type:CartActionTypes.REMOVE_ITEM,
        payload:item
    }
}

export const ClearCart = () =>
{
    return{
        type:CartActionTypes.CLEAR_CART
    }
}