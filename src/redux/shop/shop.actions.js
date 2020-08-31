import ShopActionTypes from "./shop.types"


export const FetchStart = () =>
{
    return{
        type:ShopActionTypes.FETCH_START_ASYNC,
    }
}

export const FetchSuccessfull = (collection) =>
{
    return{
        type:ShopActionTypes.FETCH_SUCCESSFULL_ASYNC,
        payload:collection
    }
}

export const FetchFailed = (errorMessage) =>
{
    return{
        type:ShopActionTypes.FETCH_FAILED_ASYNC,
        payload:errorMessage
    }
}


// export const FetchStartAsync = () =>
// {
//     return dispatch => {
       
//     }
// }