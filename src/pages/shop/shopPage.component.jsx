import React from 'react'
import {Route} from "react-router-dom"
import CollectionPage from "../collection/collection.component"
import ShopCollectionContainer from "../../components/ShopCollection/shopCollectionContainer"
import {connect} from 'react-redux'
import {FetchStart} from "../../redux/shop/shop.actions"
import WithSpinner from "../../components/with-spinner/with-spinner.component"
import {isCollectionsLoaded} from "../../redux/shop/shop.selectors"
const CollectionPageWithSpinner=WithSpinner(CollectionPage)

class ShopPage extends React.Component
{
 
  componentDidMount(){
    const {FetchStart} = this.props
    FetchStart()
  }

  render(){
    const {match,isLoading} = this.props
    return(
      <div>
        <Route exact path={`${match.path}`} component={ShopCollectionContainer} />
        <Route path={`${match.path}/:collectionId`} render={(props)=> <CollectionPageWithSpinner isLoading={isLoading} {...props} />}/>
      </div>  
    );
  }    
}

const mapDispatchToProps = dispatch =>
{
  return{
    FetchStart:()=>dispatch(FetchStart())
  }
}

const mapsStateToProps = state =>
{
  let loadingVal = !isCollectionsLoaded(state)
    return{
        isLoading:loadingVal
    }
}

export default connect(mapsStateToProps,mapDispatchToProps)(ShopPage);