import React, { useEffect } from 'react'
import {Route} from "react-router-dom"
import ShopCollectionContainer from "../../components/ShopCollection/shopCollectionContainer"
import collectionPageContainer from "../collection/collectionPageContainer"
import {connect} from 'react-redux'
import {FetchStart} from "../../redux/shop/shop.actions"


const ShopPage = ({match,FetchStart}) =>
{
  useEffect(()=>
  {
    FetchStart()
  },[FetchStart])

  return(
    <div>
      <Route exact path={`${match.path}`} component={ShopCollectionContainer} />
      <Route path={`${match.path}/:collectionId`} component={collectionPageContainer}/>
    </div>  
  );
}

const mapDispatchToProps = dispatch =>
{
  return{
    FetchStart:()=>dispatch(FetchStart())
  }
}

export default connect(null,mapDispatchToProps)(ShopPage);