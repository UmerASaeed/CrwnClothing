import {createSelector} from "reselect"
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopData = createSelector([selectShop],(shop)=>shop.ShopData)

export const selectShopDataPreview = createSelector(
    [selectShopData],collections => (collections ? Object.keys(collections).map(key=>collections[key]):[])
)

export const selectCollectionData = memoize(collectionId =>
    createSelector([selectShopData],(ShopData)=>
    {
        if(ShopData)
        {
            return ShopData[collectionId]
        }
        else
        {
            return null
        }
    }))

export const selectIsFetching = createSelector([selectShop],shop=>shop.isfetching)    

export const isCollectionsLoaded = createSelector([selectShop], shop => !!shop.ShopData)