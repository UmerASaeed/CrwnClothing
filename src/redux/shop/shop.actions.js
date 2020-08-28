import ShopActionTypes from "./shop.types"


export const UpdateCollection = (collection) =>
{
    return{
        type:ShopActionTypes.UPDATE_COLLECTION,
        payload:collection
    }
}