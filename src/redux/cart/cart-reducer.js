import {CartActionTypes} from "./cart.types"
import {AddinCart,RemoveFromCart,RemoveItem} from "./cart.utils"

const INITIAL_STATE =
{
    hidden:true,
    items: []
}

const CartReducer = (state = INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case CartActionTypes.TOGGLE_CART_HIDDEN:
            return {
                ...state,
                hidden: !state.hidden
            }
        case CartActionTypes.ADD_TO_CART:
            return {
                ...state,
                items:AddinCart(state.items,action.payload)
            }   
             
        case CartActionTypes.REMOVE_FROM_CART:
            return{
                ...state,
                items:RemoveFromCart(state.items,action.payload)
            }    
        case CartActionTypes.REMOVE_ITEM:
            return{
                ...state,
                items:RemoveItem(state.items,action.payload)
            }    
        default:
            return state;
    }
}

export default CartReducer