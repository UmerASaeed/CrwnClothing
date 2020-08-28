import ShopActionTypes from "./shop.types"
const INITIAL_STATE =
{
    ShopData:null
}

const ShopReducer = (state = INITIAL_STATE,action) =>
{
    switch(action.type)
    {
        case ShopActionTypes.UPDATE_COLLECTION:
        return{
            ...state,
            ShopData:action.payload
        }
        default:
            return state
    }
}

export default ShopReducer