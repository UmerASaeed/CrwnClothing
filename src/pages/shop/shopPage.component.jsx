import React from 'react'
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"
import ShopCollection from '../../components/ShopCollection/shopCollection.component'

const ShopPage=({match})=>
{
    return(
      <div>
        <Route exact path={`${match.path}`} component={ShopCollection}/>  
        <Route path={`${match.path}/:collectionId`} component={CollectionPage}/>
      </div>  
    );
}

export default ShopPage;