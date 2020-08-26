import {createSelector} from "reselect"
import memoize from 'lodash.memoize';

const selectShop = state => state.shop

export const selectShopData = createSelector([selectShop],(shop)=>shop.ShopData)

export const selectShopDataPreview = createSelector([selectShopData],collections => Object.keys(collections).map(key=>collections[key]))

export const selectCollectionData = memoize(collectionId =>
    createSelector([selectShopData],(ShopData)=>
    {
        return ShopData[collectionId]
    }))