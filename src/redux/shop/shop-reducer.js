import ShopActionTypes from "./shop.types"
import { ReactReduxContext } from "react-redux"
const INITIAL_STATE =
{
    ShopData:null,
    isfetching:false,
    errorMessage:undefined
}

const ShopReducer = (state = INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case ShopActionTypes.FETCH_START_ASYNC:
        return{
            ...state,
            isfetching:true
        }
        case ShopActionTypes.FETCH_SUCCESSFULL_ASYNC:
        return{
            ...state,
            ShopData:action.payload,
            isfetching:false
        }
        case ShopActionTypes.FETCH_FAILED_ASYNC:
        return{
            ...state,
            errorMessage:action.payload
        }    
        default:
            return state
    }
}

export default ShopReducer